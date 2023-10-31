const mongoose = require("mongoose");


const categorySchema = mongoose.Schema({
    name: String
})

module.exports.Category = mongoose.model('Category', categorySchema)