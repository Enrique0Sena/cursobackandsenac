const router = require("express").Router();
const controller = require("../Controllers/vendas/_vendasControllerIndex");

router.get("/listarTodasVendas", controller.listarTodasVendas);
router.get("/listarUmaVenda", controller.listarUmaVenda);

// http://localhost:5001/apiMercado/Categorias/listarTodosProdutos_Vendas
// http://localhost:5001/apiMercado/Categorias/listarUmaVenda

module.exports = router;