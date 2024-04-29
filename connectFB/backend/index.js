const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

const indexRoutes = require('./routes/index');
const academicsRoutes = require('./routes/academics');
const contactmeRoutes = require('./routes/contactme');
const frontendRoutes = require('./routes/frontend');
const backendRoutes = require('./routes/backend');
const databasesRoutes = require('./routes/databases');
const codingskillsRoutes = require('./routes/codingskills');

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', indexRoutes);
app.use('/academics', academicsRoutes);
app.use('/contactme', contactmeRoutes);
app.use('/skills/frontend', frontendRoutes);
app.use('/skills/backend', backendRoutes);
app.use('/skills/databases', databasesRoutes);
app.use('/skills/codingskills', codingskillsRoutes);

// Create a post request for /submit route where data is taken from /contactme route

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});