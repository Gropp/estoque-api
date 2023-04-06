//os servicos sao as regras de negocio que utilizam as funcoes dos repositorios
//fazemos as requisicoes dos repositorios - neste caso da table usuarios
const usuarioRepository = require('../repositories/usuario.repository');
//chamar a biblioteca .env para ler o valor SALT
require('dotenv').config();
//importando os erros da httpserros
const createError = require('http-errors');
//chamamos a biblioteca bcrypt para manipular o passwd - assincrona tem que esperar
const bcrypt = require('bcrypt');

//servico de criar usuarios
const criar = async function(usuario) {
    //testando se o usuario a ser criado ja existe - testando o email
    const existeUsuario = await usuarioRepository.encontrarPorWhere({ email: usuario.email })
    if (existeUsuario) {
        //409 é o codigo de erros para conflitos
        //a camada de controller vai tratar esse erro
        return createError(409, 'Usuário já cadastrado');
    }
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
    //tratando o erro de colocar um id que nao existe
    //lembrar de por o trycatch no controlador para receber essa mensagem
    if(!usuario) {
        return createError(404, 'Usuário não encontrado.');
    }
    return usuario;
}

module.exports = {
    criar:criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId
}