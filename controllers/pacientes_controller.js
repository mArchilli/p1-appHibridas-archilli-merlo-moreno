import Paciente from "../models/pacientes_model.js"

async function getPacientes(){
    let pacientes = await Paciente.find();
    return pacientes;
}

async function getPacienteById(id){
    let paciente = await Paciente.findById(id);
    return paciente;
}

async function getPacienteByName(nombre){
    let pacientes = await Paciente.find();
    let pacientesPorNombre = [];
    for (const paciente of pacientes) {
        if(paciente.nombre.includes(nombre)){
            pacientesPorNombre.push(paciente)
        }
    }
    return pacientesPorNombre;
}

async function deletePaciente(id){
    let paciente = await Paciente.findByIdAndDelete(id);
    return paciente;
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

async function updatePaciente(id, body){
    let pacienteActualizado = await Paciente.findByIdAndUpdate(id, {
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
    }, {new: true})
    return pacienteActualizado;
}

export {getPacientes, getPacienteById, getPacienteByName,createPaciente, updatePaciente, deletePaciente}