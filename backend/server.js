const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection

const db = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "",

  database: "certichain_db",

  port: 3307   // ⭐ Ye line add karni hai

});

// Connect Database

db.connect(err => {

  if (err) {

    console.log("Database Connection Failed");

  } else {

    console.log("Database Connected");

  }

});

// Login API

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const sql =
  "SELECT * FROM admin WHERE email=? AND password=?";

  db.query(sql,
  [email, password],

  (err, result) => {

    if (result.length > 0) {

      res.send("Login Success");

    } else {

      res.send("Login Failed");

    }

  });

});

// Server Start

app.listen(3000, () => {

  console.log("Server running on port 3000");

});