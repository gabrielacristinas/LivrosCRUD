const getAllBooks = (request, response) => {
    response.json (
)
}
const userModel = require ("../models/bookModel")

const getAllBooks = (request, response) => {
    const books = bookModel.findAll()

    return response.json (books)
}


module.exports = {
    getAllBooks
}