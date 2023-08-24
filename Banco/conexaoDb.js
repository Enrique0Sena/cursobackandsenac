const sqlite3 = require("sqlite3")

const conexaoBanco = new sqlite3.Database("./banco/Bancoback.db", sqlite3, sqlite3.OPEN_READWRITE, (err) => {
    if (err)
        return console.log(err);
});

module.exports = { conexaoBanco };