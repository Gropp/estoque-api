const validatorMessage = function(atributo) {
    return `A propriedade ${atributo} é inválida(o)`;
}

const notExists = function(atributo) {
    return `${atributo} não existe`
}

module.exports = {
    validatorMessage,
    notExists,
}