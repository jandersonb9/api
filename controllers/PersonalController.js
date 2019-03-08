const Personal = require('../model/PersonalModel');

const personalCtrl = {};

personalCtrl.getPersonal = async (req,res) => {
    const empleados = await Personal.find();
    res.json(empleados);
};

personalCtrl.postPersonal = async (req,res) => {
    const empleado = new Personal({
        documento: req.body.documento,
        tipoDoc: req.body.tipoDoc,
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        tel: req.body.tel,
        direccion: req.body.direccion,
        clave: req.body.clave
    });
    await empleado.save();
    res.json(empleado);
};

personalCtrl.getEmpeado = async (req,res) => {
    const {id} = req.params;
    const empleado = await Personal.findById(id);
    res.json(empleado);
};

personalCtrl.putPersonal = async (req,res) => {
    const {id} = req.params;
    const empleado = {
        documento: req.body.documento,
        tipoDoc: req.body.tipoDoc,
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        tel: req.body.tel,
        direccion: req.body.direccion,
        clave: req.body.clave
    };
    await Personal.findByIdAndUpdate(id,{$set:empleado}, {new: true});
    res.json(empleado);
};

personalCtrl.deletePersonal = async (req,res) => {
    await Personal.findByIdAndDelete(req.params.id);
    res.json({status: 'paila este man ya no trabaja aqui'});
};

module.exports = personalCtrl;