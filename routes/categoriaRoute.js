const router = require("express").Router();
const controller = require("../Controllers/categorias/_categoriasControllerIndex");

router.get("/listartodascategorias", controller.listarTodasCategorias);
router.get("/listarUmacategoria", controller.listarUmaCategoria);

// http://localhost:5001/apiMercado/Categorias/listartodascategorias
// http://localhost:5001/apiMercado/Categorias/listarUmacategoria

module.exports = router;
