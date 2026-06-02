const express = require("express")

const app = express ()

app.get("/", (request, response) => {
    response.send ("Livros CRU")
})

app.listem (3000,() => {
    console.log("Servidor rodando em http://localhost:3000"
        
    )
})