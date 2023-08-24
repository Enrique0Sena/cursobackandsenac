const router = require("express").Router();
const controller = require("../Controllers/produtos_vendas/_produtos_vendasControllerIndex");

router.get("/listarTodosProdutos_Vendas", controller.listarTodosProdutos_Vendas);
router.get("/listarUmProduto_Venda", controller.listarUmProduto_Venda);

// http://localhost:5001/apiMercado/Categorias/listarTodosProdutos_Vendas
// http://localhost:5001/apiMercado/Categorias/listarUmProduto_Venda

module.exports = router;