const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

// ✅ Check server
app.get("/", (req, res) => res.send("Server running..."));

// ✅ Example: Create Event
app.post("/api/events", async (req, res) => {
  try {
    const { name, date, location } = req.body;
    if (!name || !date || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const [result] = await db.execute(
      "INSERT INTO events (name, date, location) VALUES (?, ?, ?)",
      [name, date, location]
    );
    res.status(201).json({ message: "Event created", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Example: Read Events
app.get("/api/events", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM events");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("✅ Server running on port 3000"));
