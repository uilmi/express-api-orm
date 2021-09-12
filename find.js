const { Article } = require('./models');
const article = require('./models/article');

// FIND BY ALL
Article.findAll().then(article => console.log(article))

// FIND BY ID
Article.findOne({ where: { id: 1 } }).then(article => console.log(article))

// DELETE
Article.destroy({ where: { approved: false } }).then(article => console.log("Artikel yg belum diapprove sudah dihapus"))