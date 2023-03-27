// requisita o express
const express = require('express');
// requisita o body-parser
const bodyParser = require('body-parser');
// instancia o express
const app = express();
// configura a porta
const porta = 3030
// instancia o bofy-parser
app.use(bodyParser.urlencoded({extended: true}));
// seta o padrao para json
app.use(bodyParser.json());





app.listen(porta, () => {
    console.log('servidor rodando!')
})