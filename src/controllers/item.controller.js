//RECEBE TODAS AS REQUISICOES E FAZ OS TRATAMENTOS
//METODOS PARA SEREM USADOS NAS ROTAS
const create = async function(req, res) {
    res.send({message: 'rota está funcionando'});
}

module.exports = {
    create: create,
}