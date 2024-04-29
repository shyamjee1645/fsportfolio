const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'frontend', 'contactme.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.end(data);
    }
  });

});
router.post('/contactme', (req,res) => {
  res.end(<h1>Done</h1>);
})

module.exports = router;
