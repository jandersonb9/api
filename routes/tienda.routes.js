const express = require('express');
const routes = express.Router();

const servicioT = require('../controllers/TiendaController');
const servicioP = require('../controllers/PersonalController')

routes.get('/producto',servicioT.getProductos);
routes.post('/producto',servicioT.postProducto);
routes.get('/producto/:id', servicioT.getProducto);
routes.put('/producto/:id',servicioT.putProducto);
routes.delete('/producto/:id', servicioT.deleteProducto);
routes.get('/personal', servicioP.getPersonal);
routes.post('/personal', servicioP.postPersonal);
routes.get('/personal/:id', servicioP.getEmpeado);
routes.put('/personal/:id', servicioP.putPersonal);
routes.delete('/personal/:id', servicioP.deletePersonal);

module.exports = routes;