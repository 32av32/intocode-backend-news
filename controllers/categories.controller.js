const { Category } = require('../models/Category.model')


module.exports.categoriesController = {
    getCategories: (req, res) => {
        Category.find().then(data => {
            res.json(data)
        })
    },
    postCategories: (req, res) => {
        Category.create({ name: req.body.name }).then(() => {
            res.json(`Category: ${req.body.name} created`)
        })
    },
    deleteCategories: (req, res) => {
        Category.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Category with ID: ${req.params.id} has been deleted`)
        })
    }
}