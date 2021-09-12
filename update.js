const { Article } = require('./models');
const article = require('./models/article');

const query = {
    where: { id: 4 }
}

Article.update({
    approved: false
}, query)
    .then(() => {
        console.log("Artikel berhasil diupdate")
        process.exit();
    })
    .catch(err => {
        console.error("Gagal mengupdate artikle!")
    })
