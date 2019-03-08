const Tienda = require('../model/TiendaModel');

const productoCtrl = {};

productoCtrl.getProductos = async (req,res) => {
    const productos = await Tienda.find();
    res.json(productos);
};

productoCtrl.postProducto = async (req,res) => {
    const producto = new Tienda({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        imagen: req.body.imagen
    });
    await producto.save();
    res.json(producto);
};

productoCtrl.getProducto = async (req,res) => {
    const {id} = req.params;
    const producto = await Tienda.findById(id);
    res.json(producto);
};

productoCtrl.putProducto = async (req,res) => {
    const {id} = req.params;
    const producto = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        imagen: req.body.imagen
    };
    await Tienda.findByIdAndUpdate(id,{$set: producto},{new: true});
    res.json(producto);
};

productoCtrl.deleteProducto = async (req,res) => {
    await Tienda.findByIdAndDelete(req.params.id);
    res.json({status: 'Paila se elimino'});
};


module.exports = productoCtrl;