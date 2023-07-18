// Requerimos el archivo de configuracion de la bd definida en el archivo de conexion.js:
require ('./config/conexion');

/* 
Importamos el modulo express, definimos el puerto en el que se ejecutara nuestra aplicación
Y creamos una instancia de express:
*/
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

//se confugura el servidor para que acepte los datos en formato json
app.use(express.json());

//se confugura el servidor para que acepte los datos que se envian desde un formulario
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    res.header("Content-Type", "multipart/form-data");

      next();
    });

//se define el puerto por el que se ejecutara la aplicacion
app.set('port', port)

//se define la ruta de la aplicacion
app.use('/api', require('./rutas'))

//se inicia el servidor
app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('error al iniciar el servidor: ' + error)
    } else{
        console.log('servidor iniciado en el puerto: ' + port)
    }
});