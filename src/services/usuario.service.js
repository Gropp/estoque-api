//os servicos sao as regras de negocio que utilizam as funcoes dos repositorios
//fazemos as requisicoes dos repositorios - neste caso da table usuarios
const usuarioRepository = require('../repositories/usuario.repository');

//servico de criar usuarios
const create = async function(usuario) {
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

module.exports = {
    create:create,
}