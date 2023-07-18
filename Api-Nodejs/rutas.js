// Importamos el modulo express y creamos una instancia de Router
const rutas = require('express').Router();

//Importamos el archivo de conexion a la base de datos
const conexion = require ('./config/conexion');

// Definimos las rutas de nuestra aplicacion
// Ruta para obtener todos los equipos
rutas.get('/', (req, res) => {
    let sql = 'SELECT * FROM equipos';
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows);
        }
    });
});

// Ruta para obtener un equipo por su id
rutas.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM equipos WHERE id = ${id}`;
    conexion.query(sql, (err, row, fields) => {
        if (err) throw err;
        else {
            res.json(row);
        }
    });
});

// Ruta para agregar un nuevo equipo
rutas.post('/', (req, res) => {
    const { nombre, logo } = req.body;
    let sql = `INSERT INTO equipos (nombre, logo) VALUES ('${nombre}', '${logo}')`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Equipo agregado' });
        }
    });
});

// Ruta para actualizar un equipo
rutas.put('/:id', (req, res) => {
    const { nombre, logo } = req.body;
    const { id } = req.params;
    let sql = `UPDATE equipos SET nombre = '${nombre}', logo = '${logo}' WHERE id = ${id}`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Equipo actualizado' });
        }
    });
});

// Ruta para eliminar un equipo
rutas.delete('/:id', (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM equipos WHERE id = ${id}`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Equipo eliminado' });
        }
    });
});

// Exportamos el modulo para que pueda ser utilizado en otros modulos de Nodejs
module.exports = rutas;