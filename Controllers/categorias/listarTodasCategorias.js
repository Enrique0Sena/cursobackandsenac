exports.listarTodasCategorias = (req, res) => {
    const sql = "SELECT * FROM WHERE CATEGORIA_PRO"
    conexaoDb.all(sql, (err, respostas) => {
        if (err)
            res.status(500).json({ mensagem: "Ocorreu um erro ao pesquisar no banco" })
        res.status(200).json({
            sucesso: true,
            dados: respostas
        })
    })
}