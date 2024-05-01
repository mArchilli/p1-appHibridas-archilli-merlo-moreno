import Paciente from "../models/pacientes_model.js"

async function getPacientes(){
    let pacientes = await Paciente.find();
    return pacientes;
}

async function getPacienteById(id){
    let paciente = await Paciente.findById(id);
    return paciente;
}

async function getPacienteByName(nombreRecibido){
    let pacientes = await Paciente.find({ nombre: { $regex: new RegExp(nombreRecibido, 'i') } });
    return pacientes;
}

async function getPacientesOrdenados() {
    return await Paciente.find().sort({ nombre: 1 }); 
}

async function getPacientesPaginados(){
    let pacientes = await Paciente.find()
    .limit(5).
    skip(5);
    return pacientes;
}

async function getPacientesCobertMedica(coberturaRecibida){
    let pacientes = await Paciente.find({ cobertura_medica: { $regex: new RegExp(coberturaRecibida, 'i') } });
    return pacientes;
}

async function getPacientesGenero(generoRecibido){
    let pacientes = await Paciente.find({ genero: { $regex: new RegExp(generoRecibido, 'i') } });
    return pacientes;
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

export {getPacientes, getPacienteById, getPacienteByName,createPaciente, updatePaciente, deletePaciente, getPacientesOrdenados, getPacientesPaginados, getPacientesCobertMedica, getPacientesGenero}