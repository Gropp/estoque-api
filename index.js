// insere o dotenv no projeto para usar os arquivos .env do projeto
require('dotenv').config();
// requisita o express
const express = require('express');
// requisita o body-parser
const bodyParser = require('body-parser');

//requisita os middlewares
const handle404Error = require('./src/middlewares/handle404Error');
const handleError = require('./src/middlewares/handleError');

// instancia o express
const app = express();
// configura a porta no arquivo .env com o uso da biblioteca dotenv
// const porta = 3030

// importar as rotas
const usuarioRoute = require('./src/routes/usuario.route');
const itemRoute = require('./src/routes/item.route');


// instancia o bofy-parser
app.use(bodyParser.urlencoded({extended: true}));
// seta o padrao para json
app.use(bodyParser.json());

// define as chamadas de rotas - executadas por ordem de descendencia como se fosse um case
app.use('/api/usuarios', usuarioRoute);
app.use('/api/itens/', itemRoute);
//o handle404Error, nao tem error no argumento da funcao req, res, por isso ele nao captura erros, essa funçao é acionada somente se a rota digitada no browser nao corresponder a nenhuma rota listada acima
app.use(handle404Error);

//o tratamento de erro tem que ficar no final das rotas, pois ele tem que receber e tratar todos os erros de todas as rotas!
app.use(handleError)


// liga o servidor
app.listen(process.env.PORTA, () => {
    console.log('servidor rodando!')
})