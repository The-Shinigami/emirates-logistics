const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const linksRoute = require('./routes/links')
const usersRoute = require('./routes/users')

// database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connect to mongodb atlas');
    })
    .catch((err) => {
        console.log('somthing went wrong with mongodb atlas \n' + err);
    });

/* ------------------------------------------------------------------ */
// middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.100.134:3000', 'http://0.0.0.0:3000']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* ------------------------------------------------------------------ */
/* routes */
app.use('/api/links', linksRoute);
app.use('/api/users', usersRoute);
/* ------------------------------------------------------------------ */
const destDir = path.join(__dirname, 'dist/home-page');
app.use(express.static(destDir));
app.get('*', (req, res) => {
  res.sendFile(path.join(destDir, 'index.html'));
})
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`running fine on port ${port}`);
})
module.exports = app;