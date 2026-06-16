const express = require("express")
const { title } = require("node:process")

const app = express ()

app.get("/", (request, response) => {
    response.send ("Livros CRUD")
})

module.exports = app