const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",          // XAMPP default
  database: "vishu_2708" // must match phpMyAdmin DB name
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// ---------------- CRUD Routes ----------------

// 1️⃣ CREATE
app.post("/student", (req, res) => {
  const { name, age, contact } = req.body;
  const sql = "INSERT INTO student (name, age, contact) VALUES (?, ?, ?)";
  con.query(sql, [name, age, contact], (err, result) => {
    if (err) return res.send(err);
    res.send("Student added!");
  });
});

// 2️⃣ READ (All students)
app.get("/student", (req, res) => {
  const sql = "SELECT * FROM student";
  con.query(sql, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

// 3️⃣ UPDATE
app.put("/student/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, contact } = req.body;
  const sql = "UPDATE student SET name=?, age=?, contact=? WHERE id=?";
  con.query(sql, [name, age, contact, id], (err, result) => {
    if (err) return res.send(err);
    res.send("Student updated!");
  });
});

// 4️⃣ DELETE
app.delete("/student/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM student WHERE id=?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.send(err);
    res.send("Student deleted!");
  });
});

// ---------------- Server ----------------
app.listen(4000, () => console.log("Server running on port 4000"));
