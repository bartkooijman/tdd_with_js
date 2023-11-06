const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

// Vulnerable code snippet
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Vulnerable code - constructing query without proper validation or sanitization
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  // Execute the SQL query
  connection.query(query, (error, results) => {
    if (error) throw error;

    // Check if the login was successful
    if (results.length > 0) {
      res.send('Login successful');
    } else {
      res.send('Login failed');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
