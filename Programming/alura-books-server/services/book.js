const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const bookFiltered = books.filter(book => book.id === id)[0]
    return bookFiltered
}

function addBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newListOfBooks = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newListOfBooks))
}

function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))
    const modifyIndice = currentBooks.findIndex(book => book.id === id)

    const contentChanged = { ...currentBooks[modifyIndice], ...modifications }

    currentBooks[modifyIndice] = contentChanged

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))
}

function deleteBookById(id) {
    const currentBooks = JSON.parse(fs.readFileSync("books.json"))

    const filtredBooks = currentBooks.filter(book => book.id !== id)
    fs.writeFileSync("books.json", JSON.stringify(filtredBooks))
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    modifyBook,
    deleteBookById
}