//importamos o body do express-validator para acessar os metodos da biblioteca
const { body } = require('express-validator');
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

module.exports = {
    criar,
}