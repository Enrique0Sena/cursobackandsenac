exports.listarUmaCategoria = (req, res) => {
    const idCatergoria = req.query.id;
    if (!idCatergoria) {
        return res.status(400).json({
            mensagem: "por favor faça a chamada com um queryparam id."
        })
    }
    const sql = "SELECT * FROM WHERE CATEGORIA_PRO = ?"
    conexaoDb.all(sql, [idCatergoria], (err, respostas) => {
        if (err)
            res.status(500).json({ mensagem: "Ocorreu um erro ao pesquisar no banco" })
        res.status(200).json({
            sucesso: true,
            dados: respostas
        })
    })
}