//funcao para tratar as mensagens dos erros
function mountError(error) {
    //99% dos erros ja vem com uma mensagem padrao
    //capturando varios erros
    if(error.errors) {
        //faz um map no array
        return error.errors.map(err => err.msg);
    }
    //se for um unico erro
    if (error.message) {
        return[error.message];
    }
    //mensagem padrao se o erro for desconhecido, nao tiver conteudo em message 1%/2%
    return ['Algum erro aconteceu, tente novamente mais tarde.']
}

//manipulando os erros
const handleError = function(error, req, res, next) {
    //trataamos o erro na funcao acima
    const errors = mountError(error);
    //retornamos o status ou 500
    res.status(error.status || 500);
    //retornamos um json do erro
    res.json(errors);
}

//exportamos a funcao
module.exports = handleError;