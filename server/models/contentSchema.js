const mongoose = require('mongoose')
const contentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    articleImage: {
        type: String,
        required: true
    },

   
})
const Content = mongoose.model('CONTENT', contentSchema);
module.exports = Content;