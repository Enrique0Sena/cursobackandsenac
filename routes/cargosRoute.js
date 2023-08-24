 
const router = require("express").Router();
const controller = require("../Controllers/cargos/_cargosControllerindex");

router.get("/listartodoscargos", controller.listarTodasCargos);
router.get("/listarUmcargo", controller.listarUmaCargo);
router.post("/Novocargopost", controller.Novocargopost)

// http://localhost:5001/apiMercado/Cargos/Novocargopost
// http://localhost:5001/apiMercado/Cargos/listarUmcargo 

module.exports = router;
/*

const express = require("express");
require("dotenv").config();
const app = express();

app.use(require("./routes/_routesIndex"));

const port = process.env.PORTA;
app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
})
*/