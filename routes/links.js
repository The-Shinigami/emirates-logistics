const express = require("express");
const router = express.Router();
const Link = require('../models/links');

router.get('/', (req, res) => {
    Link.find()
    .then((links)=>  res.send(links))  
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
/* app.delete('/', (req, res) => {
    let rawdata = fs.readFileSync(path.resolve(__dirname, 'links.json'));
    let links = JSON.parse(rawdata);
    links = links.filter(function (link, index, arr) {
        return link.title != req.body.title && link.link != req.body.link;
    });
    fs.writeFileSync(path.resolve(__dirname, 'links.json'), JSON.stringify(links));
    res.sendStatus(200);
}); */

module.exports = router