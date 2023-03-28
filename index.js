// insere o dotenv no projeto para usar os arquivos .env do projeto
require('dotenv').config();
// requisita o express
const express = require('express');
// requisita o body-parser
const bodyParser = require('body-parser');
// instancia o express
const app = express();
// configura a porta no arquivo .env com o uso da biblioteca dotenv
// const porta = 3030
// importar as rotas
const itemRoute = require('./src/routes/item.route');

// instancia o bofy-parser
app.use(bodyParser.urlencoded({extended: true}));
// seta o padrao para json
app.use(bodyParser.json());
// define as rotas INICIAIS
app.use('/api/itens/', itemRoute);

// liga o servidor
app.listen(process.env.PORTA, () => {
    console.log('servidor rodando!')
})