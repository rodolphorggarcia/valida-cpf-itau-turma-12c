var express = require('express');
var router = express.Router();
const Cliente = require('../models/cliente');

/* GET home page. */
router.get('/', function(req, res, next) {
  var cliente = new Cliente(null, null, req.query.cpf)
  let cpfValidado = cliente.validarCPF()
  res.render('index', {cpfValidado:cpfValidado, cpf:req.query.cpf });
});

module.exports = router;
