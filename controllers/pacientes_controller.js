import Paciente from "../models/pacientes_model.js"

async function getPacientes(){
    let pacientes = await Paciente.find();
    return pacientes;
}

async function createPaciente(body){
    let paciente = new Paciente({
    nombre: body.nombre,
    correo: body.correo,
    genero: body.genero,
    dni: body.dni,
    telefono: body.telefono,
    fecNac: body.fecNac,
    cobertura_medica: body.cobertura_medica,
    direccion: body.direccion,
    estado_civil: body.estado_civil,
    educacion: body.educacion,
    profesion: body.profesion,
    cuil: body.cuil,
    diagnostico: body.diagnostico,
    representate: body.representante
   })
    return await paciente.save()
}

async function updatePaciente(body, dni){
    let paciente = new Paciente.updateOne({"dni":dni}, {
        $set:{
            nombre: body.nombre,
            correo: body.correo,
            genero: body.genero,
            dni: body.dni,
            telefono: body.telefono,
            fecNac: body.fecNac,
            cobertura_medica: body.cobertura_medica,
            direccion: body.direccion,
            estado_civil: body.estado_civil,
            educacion: body.educacion,
            profesion: body.profesion,
            cuil: body.cuil,
            diagnostico: body.diagnostico,
            representate: body.representante
        }
    })
    
    return paciente;
}

export {getPacientes, createPaciente, updatePaciente}