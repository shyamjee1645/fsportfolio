const express = require("express");
const path = require("path");
const mysql = require("mysql");

/*const connection = mysql.createConnection({
    host: '127.0.0.1',
  user: 'root',
  password: 'Sdcard@1645',
  database: 'db'
}
)

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Connected to database as ID ' + connection.threadId);
  });*/

const app = express();
const port = 3000;


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login/login.html'));
});

// Serve the registration page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/register/register.html'));
});

// Serve the to-do list page
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}.`);
});