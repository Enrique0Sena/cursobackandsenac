const router = require("express").Router();
const controller = require("../Controllers/clientes/_clientesControllerIndex");

router.get("/listarTodasClientes", controller.listarTodosClientes);
router.get("/listarUmCliente", controller.listarUmCliente);

// http://localhost:5001/apiMercado/Categorias/listarTodasClientes
// http://localhost:5001/apiMercado/Categorias/listarUmCliente

module.exports = router;
