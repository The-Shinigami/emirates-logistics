const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

/* 
 */

/* ------------------------------------------------------------------ */
app.use(cors({
  origin: ['https://sysoxtest.herokuapp.com', 'http://192.168.100.134:3000', 'http://0.0.0.0:3000']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
/* ------------------------------------------------------------------ */
/* link route */
/* ------------------------------- */
/* ------------------------------------------------------------------ */
app.get('/links', (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'links.json'));
  let links = JSON.parse(rawdata);
  res.send(links)
})
/* ------------------------------- */

app.post('/links', (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'links.json'));
  let links = JSON.parse(rawdata);
  links.push(req.body);
  fs.writeFileSync(path.resolve(__dirname, 'links.json'), JSON.stringify(links));
  res.sendStatus(200);
})
/* ------------------------------- */
app.delete('/links', (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'links.json'));
  let links = JSON.parse(rawdata);
  links = links.filter(function (link, index, arr) {
    return link.title != req.body.title && link.link != req.body.link;
  });
  fs.writeFileSync(path.resolve(__dirname, 'links.json'), JSON.stringify(links));
  res.sendStatus(200);
})
/* ------------------------------------------------------------------ */
/* user route */
/* ------------------------------- */

app.post('/users/auth', (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'users.json'));
  let users = JSON.parse(rawdata);
  user = users.filter(function (link, index, arr) {
    return link.username == req.body.username && link.password == req.body.password
  });
  if (user[0] == null) {
    res.send(false);
  }
  res.send(true);
})

/* ------------------------------- */

app.post('/users', (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'users.json'));
  let users = JSON.parse(rawdata);
  users.push(req.body);
  fs.writeFileSync(path.resolve(__dirname, 'users.json'), JSON.stringify(users));
  res.sendStatus(200);
})
/* ------------------------------- */

app.get('/users', (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'users.json'));
  let users = JSON.parse(rawdata);
  res.send(users)
})
/* ------------------------------- */
app.delete('/users', (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'users.json'));
  let users = JSON.parse(rawdata);
  console.log(req.body);
  users = users.filter(function (user, index, arr) {
    return user.username != req.body.username && user.password != req.body.password;
  });

  fs.writeFileSync(path.resolve(__dirname, 'users.json'), JSON.stringify(users));
  res.sendStatus(200);
})


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