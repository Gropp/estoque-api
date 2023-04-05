//requisicao dos servicos
const usuarioRepository = require('../repositories/usuario.repository');
const usuarioService = require('../services/usuario.service');

//RECEBE TODAS AS REQUISICOES E FAZ OS TRATAMENTOS
//METODOS PARA SEREM USADOS NAS ROTAS
const criar = async function(req, res) {
    const usuario = await usuarioService.criar(req.body);
    res.send(usuario);
}

const encontrarTodos = async function(req, res) {
    const usuarios = await usuarioService.encontrarTodos();
    res.send(usuarios);
}

const encontrarPorId = async function(req, res) {
    const usuario = await usuarioRepository.encontrarPorId(req.params.id);
    res.send(usuario);
}
module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId
}