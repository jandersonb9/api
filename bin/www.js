const express = require('express');
const morgan = require('morgan');
const app = express();
require('../db/db');
const routes = require('../routes/tienda.routes');


//setting
app.set('port', process.env.PORT||3000);
//midlewere
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api',routes);


//server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
