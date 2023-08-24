const router = require("express").Router();
const controller = require("../Controllers/fornecedores/_fornecedoresControllerIndex");


router.get("/listarUmEndereco", controller.listarUmFornecedor);

// http://localhost:5001/apiMercado/Categorias/listarTodosFornecedor
// http://localhost:5001/apiMercado/Categorias/listarUmEndereco

module.exports = router;