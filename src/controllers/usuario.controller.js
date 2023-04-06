//requisicao dos servicos
const usuarioRepository = require('../repositories/usuario.repository');
const usuarioService = require('../services/usuario.service');

//RECEBE TODAS AS REQUISICOES E FAZ OS TRATAMENTOS
//METODOS PARA SEREM USADOS NAS ROTAS
//TEM QUE TER O NEXT PARA ENCONTRAR O PROXIMO MIDDLEWARE
const criar = async function(req, res, next) {
    //TRATANDO ERROS
    try {
        //teste de erro de semantica - dar console.log em uma variavel que nao exite
        //console.log(varnaoexite);
        const response = await usuarioService.criar(req.body);
        //testa se response veio com alguma mensagem de erro
        //se vier ele encaminha a response para o catch
        if (response && response.message) {
            //encaminha a response
            throw response
        }
        res.send(response);
    } catch (error) {
        //erro de semantica - manda o erro para o next - middleware que CAPTURE os erros
        return next(error)
    }
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