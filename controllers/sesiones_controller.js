import Sesion from "../models/sesiones_model.js"

async function getSesiones(){
    let sesiones = await Sesion.find();
    return sesiones;
}

async function getSesionById(id){
    let sesion = await Sesion.findById(id);
    return sesion;
}

async function deleteSesion(id){
    let sesion = await Sesion.findByIdAndDelete(id);
    return sesion;
}

async function createSesion(req){
    let sesion = new Sesion({
    fecha: req.body.fecha,
    horario: req.body.horario,
    paciente: req.params.id,
    profesional: req.body.profesional,
    duracion: req.body.duracion,
    modalidad: req.body.modalidad,
    ubicacion: req.body.ubicacion
   })
    return await sesion.save()
}

async function updateSesion(id, body){
    let sesionActualizado = await Sesion.findByIdAndUpdate(id, {
        $set:{
            fecha: body.fecha,
            horario: body.horario,
            paciente: body.paciente,
            profesional: body.profesional,
            duracion: body.duracion,
            modalidad: body.modalidad,
            ubicacion: body.ubicacion
        }
    }, {new: true})
    return sesionActualizado;
}

export {getSesiones, getSesionById, createSesion, updateSesion, deleteSesion}