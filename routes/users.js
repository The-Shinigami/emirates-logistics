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


