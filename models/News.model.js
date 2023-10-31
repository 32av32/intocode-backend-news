const mongoose = require("mongoose");


const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    categoryId: mongoose.Types.ObjectId
})

module.exports.News = mongoose.model('News', newsSchema)