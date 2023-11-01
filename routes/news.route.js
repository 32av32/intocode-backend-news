const { Router } = require('express')
const { newsController } = require('../controllers/news.controller')
const router = Router()

router.get('/news', newsController.getAllNews)
router.get('/news/:id', newsController.getNews)
router.post('/news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.patchNews)

module.exports = router;