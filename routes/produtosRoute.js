const router = require("express").Router();
const controller = require("../Controllers/produtos/_produtosControllerIndex");

router.get("/listarTodosProdutos", controller.listarTodosProdutos);
router.get("/listarUmProduto", controller.listarUmProduto);

// http://localhost:5001/apiMercado/Categorias/listarTodosProdutos
// http://localhost:5001/apiMercado/Categorias/listarUmProduto

module.exports = router;