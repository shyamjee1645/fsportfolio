const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'index.html'));
});


app.get('/google', (req, res) => {
    res.redirect('https://www.google.com/');
});
// router.get('/', (req, res) => {
//   const filePath = path.join(__dirname, '..', '..', 'frontend', 'index.html');
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.end(data);
//     }
//   });
// });

module.exports = app;
