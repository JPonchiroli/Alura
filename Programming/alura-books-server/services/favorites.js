const fs = require('fs')

function getAllFavorites() {
    return JSON.parse(fs.readFileSync("favorites.json"))
}

function deleteFavoriteById(id) {
    const books = JSON.parse(fs.readFileSync("favorites.json"))
    const filtredBooks = books.filter(books => books.id !== id)

    fs.writeFileSync('favorites.json', JSON.stringify(filtredBooks))
}

function addFavorite(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const favorites = JSON.parse(fs.readFileSync("favorites.json"))

    const bookInsered = books.find(books => books.id === id)
    const newFavoritesList = [...favorites, bookInsered]

    fs.writeFileSync('favorites.json', JSON.stringify(newFavoritesList))
}

module.exports = {
    getAllFavorites,
    deleteFavoriteById,
    addFavorite
} 
