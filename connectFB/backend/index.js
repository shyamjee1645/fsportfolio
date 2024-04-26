const express = require('express');
const app = express();
const port = 3000;

const indexRoutes = require('./routes/index');
const academicsRoutes = require('./routes/academics');
const contactmeRoutes = require('./routes/contactme');
// const aboutRoutes = require('./routes/about');
// const contactRoutes = require('./routes/contact');

// Use the routes
app.use('/', indexRoutes);
app.use('/academics', academicsRoutes);
app.use('/contactme', contactmeRoutes);
//app.use('/about', aboutRoutes);
//app.use('/contact', contactRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});