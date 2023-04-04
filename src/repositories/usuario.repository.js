//COMUNICACAO COM A TABELA usuarios DO BD
//requisita o banco
const db = require('../database/models/index');
//requisita a tabela usuarios do banco
const { Usuario } = require('../database/models/index');

//funcao de create usuarios
//funcoes de manipulacao do bd nao serao alteradas, entao criamos como constantes
const criar = async function(usuario) {
    const usuarioCriado = await Usuario.create(usuario);
    return usuarioCriado;
}


//exportando as funcoes
module.exports = {
    criar: criar,
}