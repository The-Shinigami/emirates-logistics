const express = require("express");
const router = express.Router();
const Link = require('../models/links');

router.get('/', (req, res) => {
    Link.find()
        .then((links) => {
            res.send(links)
        })  
});
/* ------------------------------- */
//Create a link
router.post('/', (req, res) => {
    link = new Link(
        {
            title: req.body.title,
            link: req.body.link
        }
    )  
    link.save().then(() => {
        res.sendStatus(200);
    });  
});
/* ------------------------------- */
router.delete('/', (req, res) => {
   Link.findOne({
      "title": req.body.title,
      "link": req.body.link
    })
    .exec(function (err, link) {
        if (err) res.send(500);
        link.delete();
 res.send(200);
});
});

module.exports = router