//requerimos o express - httpserver
const express = require('express');
//invocamos o metodo de rotas do express
const router = express.Router();
//requirimos o controlador dos usuarios
const usuarioController = require('../controllers/usuario.controller');

//o segundo argumento do router.post é a funcao req, res, que esta armazenada dentro
//é uma rota de entrada - post com a funcao create do modulo controller
router.post('/', usuarioController.criar)

//exportamos a rota
module.exports = router;