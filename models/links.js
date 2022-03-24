const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        link: {
            type: String,
            required: true,
            unique: true
        }
    }
);


module.exports = new mongoose.model('Link', LinkSchema);