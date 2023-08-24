const router = require("express").Router();
const controller = require("../Controllers/funcionarios/_funcionariosControllerIndex");

router.get("/listarUmfuncionario", controller.listarUmFuncionario);

// http://localhost:5001/apiMercado/Categorias/listartodosfuncionarios
// http://localhost:5001/apiMercado/Categorias/listarUmfuncionario 

module.exports = router;