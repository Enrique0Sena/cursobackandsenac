const router = require("express").Router();
const controller = require("../Controllers/endereco/_enderecoControllerIndex");

router.get("/listarTodosEnderecos", controller.listarTodosEnderecos);
router.get("/listarUmEndereco", controller.listarUmEndereco);

// http://localhost:5001/apiMercado/Categorias/listarTodosEnderecos
// http://localhost:5001/apiMercado/Categorias/listarUmEndereco

module.exports = router;