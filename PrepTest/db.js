const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",        // enter your MySQL password here if any
  database: "eventdb"  // use the same database name you created
});

module.exports = db;
