const express = require("express");
const app = express();

// challenge 3 - middleware
function logger(req, res, next) {
  console.log(`[${req.method}] ${req.url}`);
  console.log(`${new Date().toISOString()} — [${req.method}] ${req.url}`);
  next();
}

app.use(logger);
app.use(express.json());

// import book router
const bookRouter = require("./routes/books");
app.use("/books", bookRouter);

// challenge 1 
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

app.get("/status", (req, res) => {
  res.json({ server: "running", uptime: "OK" });
});

// challenge 2
app.get("/products", (req, res) => {
  const name = req.query.name;

  if (name) {
    res.send(`Searching for product: ${name}`);
  } else {
    res.send("Please provide a product name");
  }
});

// challenge 5 - 404 handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// bonus: error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
