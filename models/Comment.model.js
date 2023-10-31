const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({
    user: String,
    text: String,
    newsId: mongoose.Types.ObjectId
})

module.exports.Comment = mongoose.model('Comment', commentSchema)