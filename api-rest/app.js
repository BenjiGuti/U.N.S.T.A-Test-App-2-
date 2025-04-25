const express = require('express');
const app = express();
const negocio = require('./negocio');



app.use(express.json());

app.get('/productos', (req, res) => {
    const productos = negocio.listarProductos();
    res.json (productos);
});


app.post('/productos', (req, res) => {
    try {
        const { nombre, precio } = req.body;
        negocio.agregarProducto(nombre, precio);
        res.status(201).json({ mensaje: 'Producto agregado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



app.listen(3000, () => {
    console.log('API REST funcionando en http://localhost:3000');
});
