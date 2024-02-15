const { getAllBooks, getBookById, addBook, modifyBook, deleteBookById } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Invalid ID")
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body

        if (req.body.name) {
            addBook(newBook)
            res.status(201)
            res.send("Book Successfully Added")
        } else {
            res.status(422)
            res.send("Name Input is Required")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


function patchBook(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)) {
            modifyBook(body, id)
            res.send("Item Modified Succesfully")
        } else {
            res.status(422)
            res.send("Invalid ID")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteBookById(id)
            res.send("Book Deleted Succesfully")
        } else {
            res.status(422)
            res.send("Invalid ID")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}