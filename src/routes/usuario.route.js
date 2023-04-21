//requerimos o express - httpserver
const express = require('express');
//invocamos o metodo de rotas do express
const router = express.Router();
//requirimos o controlador dos usuarios
const usuarioController = require('../controllers/usuario.controller');
//importando o usuarioValidator para tratar erros body e params
const usuarioValidator = require('../validators/usuario.validator');

//o segundo argumento do router.post é a funcao req, res, que esta armazenada dentro
//é uma rota de entrada - post com a funcao create do modulo controller
//router.post('/', usuarioController.criar)
//adicionando um middleware dentro da rota antes da funcao criar
router.post('/', usuarioValidator.criar(), usuarioController.criar)
//rota put para atualizar um registro
router.put('/:id', usuarioValidator.atualizar(), usuarioController.atualizar)
//rota de consulta GET
router.get('/', usuarioController.encontrarTodos)
//rota de consulta por id
router.get('/:id', usuarioValidator.encontrarPorId() ,usuarioController.encontrarPorId)

//exportamos a rota
module.exports = router;