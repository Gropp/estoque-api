//os servicos sao as regras de negocio que utilizam as funcoes dos repositorios
//fazemos as requisicoes dos repositorios - neste caso da table usuarios
const usuarioRepository = require('../repositories/usuario.repository');

//servico de criar usuarios
const criar = async function(usuario) {
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