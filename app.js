const express = require('express');
const app = express();

const mainRoutes = require('./routes/main');


app.use(express.static('public'));

// Levantamos el server
app.listen(3000,() => {console.log('Servidor Levantado')});

// Rutas Estaticas
app.use('/', mainRoutes);


