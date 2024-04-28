import Sesion from "../models/sesiones_model.js"

async function getSesiones(){
    let sesiones = await Sesion.find();
    return sesiones;
}

async function createSesion(body){
    let sesion = new Sesion({
    fecha: body.fecha,
    horario: body.horario,
    paciente: body.paciente,
    profesional: body.profesional,
    duracion: body.duracion,
    modalidad: body.modalidad,
    ubicacion: body.ubicacion
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

export {getSesiones, createSesion, updateSesion}