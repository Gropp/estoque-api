//COMUNICACAO COM O BANCO DE DADOS
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

//funcao de select * sem parametros
const encontrarTodos = async function() {
    const usuarios = await Usuario.findAll();
    return usuarios;
}

//select por id
const encontrarPorId = async function(id) {
    const usuario = await Usuario.findByPk(id);
    return usuario;
}


//exportando as funcoes
module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId
}