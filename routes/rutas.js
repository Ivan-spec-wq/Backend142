const express = require('express');
const router = espress.Router();
const clienteController = require('../controllers/clienteController');

 //rutas de nuestro crud
 router.post('/', clienteController.agregarClientes);
 router.get('/', clienteController.buscarClientes);
 router.get('/:id', clienteController.buscarCliente);
 router.put('/:id', clienteController.eliminarClientes);
 router.delete('/:id', clienteController.actualizarCliente);

 //router.put

module.exports = router;
