//requisicao dos servicos
const { validationResult } = require('express-validator');
const usuarioRepository = require('../repositories/usuario.repository');
const usuarioService = require('../services/usuario.service');
const createError = require('http-errors');
//RECEBE TODAS AS REQUISICOES E FAZ OS TRATAMENTOS
//METODOS PARA SEREM USADOS NAS ROTAS
//TEM QUE TER O NEXT PARA ENCONTRAR O PROXIMO MIDDLEWARE
const criar = async function(req, res, next) {
    //TRATANDO ERROS
    try {
        //adicionando o validator dentro do controller, vai receber a req e testar se tem erros
        //se tiver erros, nao for vazio, ele vai mandar o status 422 e um array com todos os erros encontrados
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw createError(422, { errors: errors.array()})
        }
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

const atualizar = async function(req, res, next) {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw createError(422, { errors: errors.array()})
        }

        const response = await usuarioService.atualizar({
            nome: req.body.nome
        }, req.params.id);
        //testa se response veio com alguma mensagem de erro
        //se vier ele encaminha a response para o catch
        if (response && response.message) {
            //encaminha a response
            throw response
        }

        res.send(response);

    } catch (error) {
        return next(error)
    }
}

const encontrarTodos = async function(req, res, next) {
    try {
        //esta funcao faz um select geral na tabela, nao tem argumentos, entao nao tem response, se der um erro de tabela vazia o proprio trycatch gerencia esse erro.
        const response = await usuarioService.encontrarTodos();
        res.send(response);

    } catch (error) {
        return next(error)
    }
}    

const encontrarPorId = async function(req, res, next) {
    try {
        //adicionando o validator dentro do controller, vai receber a req e testar se tem erros
        //se tiver erros, nao for vazio, ele vai mandar o status 422 e um array com todos os erros encontrados
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw createError(422, { errors: errors.array()})
        }
        const response = await usuarioService.encontrarPorId(req.params.id);
        //testa se response veio com alguma mensagem de erro
        //se vier ele encaminha a response para o catch
        if (response && response.message) {
            //encaminha a response
            //o throw finaliza o try
            throw response;
        }
        res.send(response);
    
    } catch (error) {
        //erro de semantica - manda o erro para o next - middleware que CAPTURE os erros
        return next(error)
    }
    
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId
}