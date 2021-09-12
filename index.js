const express = require('express');
const app = express();
const { Article } = require('./models');

const port = 3000;

app.use(express.json());

app.get('/article', (req, res) => {
    Article.findAll()
        .then(articles => {
            res.status(200).json(articles);
        })
})

app.get('/article/:id', (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    })
        .then(articles => {
            res.status(200).json(articles);
        })
})

app.post('/articles', (req, res) => {
    Article.create({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    })
        .then(article => {
            res.status(201).json(article)
        })
})

app.put('/articles/:id', (req, res) => {
    Article.update({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    }, {
        where: { id: req.params.id }
    })
        .then(article => {
            res.status(201).json(article)
        })
})

app.listen(port);