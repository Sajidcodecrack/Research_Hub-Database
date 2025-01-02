const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',     // Replace with your MySQL host
  user: 'root',          // Replace with your MySQL username
  password: 'sajid123456',          // Replace with your MySQL password
  database: 'Research_vault',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Insert user data into the database
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    console.log('Data inserted:', result);
    res.status(200).json({ message: 'User registered successfully!' });
  });
});

// Fetch users for testing (optional)
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json(results);
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
