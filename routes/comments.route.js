const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')
const router = Router()

router.get('/comments', commentsController.getComments)
router.post('/comments', commentsController.postComments)
router.delete('/comments/:id', commentsController.deleteComments)

module.exports = router