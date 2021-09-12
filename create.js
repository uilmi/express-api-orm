const { Article } = require('./models');

Article.create({
    title: 'Hello World',
    body: 'Ini bagian body dari hellow world',
    approved: true
})
    .then(article => {
        console.log(article)
    });