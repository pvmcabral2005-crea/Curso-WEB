const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send("Meu primeiro servidor express.js");
    });

app.listen(3000, () => {
    console.log("Novo servidor rodando em http://localhost:3000");


});