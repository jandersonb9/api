const mongoose = require('mongoose');
const URI = 'mongodb://localhost/db_TiendaNutri';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));

module.exports = mongoose;