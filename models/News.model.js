const mongoose = require("mongoose");


const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

module.exports.News = mongoose.model('News', newsSchema)