const express = require('express');
const conectarBD = require('../config/db');
const cors = require ('cors');

//Creamos nustro servidor
const app = express();
const puerto = process.env.PORT || 5000;

//enlazamos la conexion con nuestra base de datos
//const port = process.env.PORT || 5000;

conectarBD();
app.use(cors());
app.use(express.json());

// ruta rpicipal del proyecto
app.use('/api/clientes', require('../routes/cliente'));

//Ruta para verificar el servidor
app.get('/', (req, res) =>{
    res.send("Bienvenidos estamos desde el navegador");
})

app.listen(port, () => console.log('Estamos conectados com el puerto', port));

