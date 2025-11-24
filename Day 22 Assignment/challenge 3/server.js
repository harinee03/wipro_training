const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.urlencoded({ extended: true }));

// DATABASE 
mongoose.connect("mongodb://localhost:27017/day22auth")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String
});

const User = mongoose.model("User", userSchema);

//SESSIONS
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//PASSPORT STRATEGY 
passport.use(
  new LocalStrategy(async (username, password, done) => {

    // Debug logs
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);

    const user = await User.findOne({ username });
    console.log("User Found:", user);

    if (!user) return done(null, false);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch);

    if (!isMatch) return done(null, false);

    return done(null, user);
  })
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Login Form
app.get("/login", (req, res) => {
  res.send(`
    <h2>Login</h2>

    <form action="/login" method="POST" style="display:block; width:250px;">
      
      <div style="margin-bottom:10px;">
        <label>Username:</label><br>
        <input type="text" name="username" required style="width:100%;" />
      </div>

      <div style="margin-bottom:10px;">
        <label>Password:</label><br>
        <input type="password" name="password" required style="width:100%;" />
      </div>

      <button type="submit">Login</button>
    </form>
  `);
});



// Login Handler
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("Login successful!");
});

// Admin Route 
function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  res.send("Access Denied");
}

app.get("/admin", isAdmin, (req, res) => {
  res.send("Welcome, Admin!");
});
// Generate hash for a password
app.get("/makehash/:pwd", async (req, res) => {
  const hash = await bcrypt.hash(req.params.pwd, 10);
  res.send("Hash: " + hash);
});

// START SERVER 
app.listen(3000, () => console.log("Challenge 3 running on port 3000"));
