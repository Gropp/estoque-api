//verifica se a rota digitada existe 404
const handle404Error = function(req, res) {
    res.status(404);
    res.send(['Página não encontrada'])
}

module.exports = handle404Error;