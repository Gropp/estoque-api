const express = require('express');
// funcao para roterizar a aplicacao - modula por verbo http
const router = express.Router();
const itemController = require('../controllers/item.controller');

// neste arquivo vao as rotas a partir de /api/itens
router.post('/', itemController.create);
router.post('/test', itemController.create);

module.exports = router