//importamos o body do express-validator para acessar os metodos da biblioteca
const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

//quando for o metodo criar da api ele vai fazer essa validacao retornando um array de erros
const criar = function() {
    return [
        //testa se o nome exist, se ele é string)
        //o bail nao encadeia mensagem de erro, se o anterior der erro ele nao testa o proximo
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('senha', validatorMessage('Senha')).exists().bail().isString()
    ]
}

//quando for atualizar o nome de um usuario
const atualizar = function(){
    return[
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

//testa a rota que tem o id como parametro - params
const encontrarPorId = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

module.exports = {
    criar,
    atualizar,
    encontrarPorId
}