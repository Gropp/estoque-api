//requisicao dos servicos
const usuarioService = require('../services/usuario.service');

//RECEBE TODAS AS REQUISICOES E FAZ OS TRATAMENTOS
//METODOS PARA SEREM USADOS NAS ROTAS
const criar = async function(req, res) {
    const usuario = await usuarioService.criar(req.body);
    res.send(usuario);
}

module.exports = {
    criar: criar,
}