const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// challenge 3
app.use(express.static(__dirname));
const http = require("http");       
const { Server } = require("socket.io");
const server = http.createServer(app);    
const io = new Server(server); 


// challenge 2
app.use("/materials", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, file.originalname)
});

function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname);
  if (ext !== ".pdf") {
    return cb(new Error("Only PDF files allowed!"));
  }
  cb(null, true);
}

const upload = multer({ storage, fileFilter });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send(`File uploaded successfully: ${req.file.originalname}`);
});


// challenge 3
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg);  
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use((err, req, res, next) => {
  return res.status(400).send("Error: " + err.message);
});

server.listen(3000, () => console.log("Server running on port 3000"));


