const router = require("express").Router();
const rotaPadrao = "/apiMercado/";

router.use(rotaPadrao + "Categorias", require("./categoriaRoute"));
router.use(rotaPadrao + "Funcionarios", require("./funcionariosRoute"));
router.use(rotaPadrao + "Cargos", require("./cargosRoute"));
router.use(rotaPadrao + "Clientes", require("./clienteRoute"));
router.use(rotaPadrao + "Endereco", require("./enderecoRoute"));
router.use(rotaPadrao + "fornecedores", require("./fornecedoresRoute"));
router.use(rotaPadrao + "Produtos_vendas", require("./Produtos_vendasRoute"));
router.use(rotaPadrao + "Produtos", require("./ProdutosRoute"));
router.use(rotaPadrao + "Vendas", require("./vendasRoute"));

router.use("/", (req, res) => {
    console.log("entrei");
    console.log(req.url, req.method, req.ip, req.body);
    return res.sendStatus(418)
});

// http://localhost:5001/apiMercado/Categorias
// http://localhost:5001/apiMercado/Funcionarios
// http://localhost:5001/apiMercado/Cargos/Novocargopost
// http://localhost:5001/apiMercado/Clientes
// http://localhost:5001/apiMercado/Endereco
// http://localhost:5001/apiMercado/Fornecedores
// http://localhost:5001/apiMercado/Produtos
// http://localhost:5001/apiMercado/Vendas

module.exports = router;