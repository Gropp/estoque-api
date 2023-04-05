//os servicos sao as regras de negocio que utilizam as funcoes dos repositorios
//fazemos as requisicoes dos repositorios - neste caso da table usuarios
const usuarioRepository = require('../repositories/usuario.repository');
//chamar a biblioteca .env para ler o valor SALT
require('dotenv').config();
//chamamos a biblioteca bcrypt para manipular o passwd - assincrona tem que esperar
const bcrypt = require('bcrypt');


//servico de criar usuarios
const criar = async function(usuario) {
    //adicionar a criptografia da senha
    //transformar o salt em inteiro ~~ (dois tios)
    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.criar(usuario);
    return usuarioCriado;
}

//servico para listar todos os usuarios
const encontrarTodos = async function() {
    const usuarios = await usuarioRepository.encontrarTodos();
    return usuarios;
}

//servico para encontrar um usuario por um id
const encontrarPorId = async function(id) {
    const usuario = await usuarioRepository.encontrarPorId(id);
    return usuario;
}

module.exports = {
    criar:criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId
}