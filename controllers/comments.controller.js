const { Comment } = require('../models/Comment.model')
const mongoose = require("mongoose");


module.exports.commentsController = {
    getComments: (req, res) => {
        Comment.find({ newsId: req.query.news })
            .then(data => res.json(data))
            .catch(() => res.json([]))
    },
    postComments: (req, res) => {
        let newComment = {
            user: req.body.user,
            text: req.body.text,
            newsId: new mongoose.Types.ObjectId(req.body.newsId)
        }
        Comment.create(newComment).then(() => {
            res.json(`Comment by ${req.body.user} created`)
        })
    },
    deleteComments: (req, res) => {
        Comment.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Comment with ID: ${req.params.id} has been deleted`)
        })
    },
}