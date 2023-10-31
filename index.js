const express = require('express')
const mongoose = require("mongoose");


const app = express()
app.use(express.json())
app.use(require("./routes/news.route"))
app.use(require("./routes/categories.route"))
app.use(require("./routes/comments.route"))

mongoose.connect("mongodb+srv://32av32:AV123580xx@cluster0.7fiabdg.mongodb.net/news_app?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000)