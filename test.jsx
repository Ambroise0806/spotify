const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ambroise',
  password: 'youhou',
  database: 'spotify'
});

app.get('/api/genres', (req, res) => {
  connection.query('SELECT * FROM genres', (error, results, fields) => {
    if (error) {
      console.error('Error fetching genres:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
