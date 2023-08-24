const { conexaoBanco } = require ("../../Banco/conexaoDb")  

exports.Novocargopost = (req, res) => {
    console.log("teste")
    conexaoBanco.run("INSERT INTO cargos (id_cargo, valor_p_cargo) VALUES (?,?);",[req.body.id, req.body.salario],
    (err) => {
        if (err)
            return res.status(500).json({ msg: 'erro ao inserir' })
    });
    return res.status(201).json({ msg: 'Inserido  com sucesso' })
}
// http://localhost:5001/apiMercado/Cargos/Novocargopost