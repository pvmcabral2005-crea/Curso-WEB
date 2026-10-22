const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Servidor com a data e horário atual");
});

app.get("/horario", (req,res) => {
    res.json([
        {dia: "quinta", horario: "11h"},
        {dia: "sexta", horario: "9h"}
    ]);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
