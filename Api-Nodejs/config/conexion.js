// Importamos el módulo mysql para la conexión a la base de datos
const mysql = require('mysql');

// Creamos una instancia de conexión utilizando la función createConnection del módulo mysql
const conexion = mysql.createConnection({
    //parametros de conexión
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_nodejs'
});

// Conectamos a la base de datos utilizando la instancia de conexión que creamos
conexion.connect((error) => {
    if (error) {
        console.log('Error de conexión : ' + error);
        return;
    }
    console.log('¡Se ha conectado a la base de datos!');
});

// Exportamos la instancia de conexión para que pueda ser utilizada en otros modulos de Nodejs
module.exports = conexion;