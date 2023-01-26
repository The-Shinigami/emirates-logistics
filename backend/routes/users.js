const express = require("express");
const router = express.Router();
const User = require('../models/users');


router.post('/auth', (req, res) => {
  User.findOne({
      "username": req.body.username,
      "password": req.body.password
    })
    .exec(function (err) {
  if (err) res.send(false);
 res.send(true);
});
  
})

/* ------------------------------- */

router.post('/', (req, res) => {
     user = new User(
        {
            username :  req.body.username,
            password : req.body.password
        }
    )  
    user.save().then(() => {
        res.sendStatus(200);
    });  
})
/* ------------------------------- */

router.get('/', (req, res) => {
   User.find()
        .then((users) => {
            res.send(users)
        })  
})
/* ------------------------------- */
router.delete('/', (req, res) => {
    User.findOne({
       "username": req.body.username,
      "password": req.body.password
    })
    .exec(function (err, user) {
        if (err) res.send(500);
        user.delete();
 res.send(200);
});
})
module.exports = router