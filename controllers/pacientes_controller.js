import Paciente from "../models/pacientes_model.js"

async function getPacientes(){
    let pacientes = await Paciente.find();
    return pacientes;
}

export {getPacientes}