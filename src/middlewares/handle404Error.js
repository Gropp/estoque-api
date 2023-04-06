//verifica se a rota digitada existe 404
//essa funcao nao captura erros, pois nao tem error, nem next nos argumentos da funçao, tem somente req e res
const handle404Error = function(req, res) {
    res.status(404);
    res.send(['Página não encontrada'])
}

module.exports = handle404Error;