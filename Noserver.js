const express = require ("express");
const app = express ();
const conexaoDb = require ("./Banco/conexaoDb")
require("dotenv").config();
require ("./routes/_routesIndex")


const port = process.env.PORTA;
app.listen(port,() =>{ 
    console.log(`Servidor rodando na porta: ${port}`)
})