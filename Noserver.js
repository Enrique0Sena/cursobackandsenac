const express = require ("express");
const { conexaoBanco } = require ("./Banco/conexaoDb")
require("dotenv").config();
const port = process.env.PORTA;
const app = express ();

app.use(require("./routes/_routesIndex"));

app.listen(port,() =>{ 
    console.log(`Servidor rodando na porta: ${port}`)
})
