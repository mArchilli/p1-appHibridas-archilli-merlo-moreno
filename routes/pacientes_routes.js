import express from "express"
import { getPacientes, getPacienteById , getPacienteByName, createPaciente, updatePaciente, deletePaciente, getPacientesOrdenados, getPacientesPaginados } from "../controllers/pacientes_controller.js";
import Joi from "joi";

const ruta = express.Router();

const schema = Joi.object({
    nombre: Joi.string()
                .alphanum()
                .min(3)
                .max(20)
                .required(),
    correo: Joi.string()
    .email({minDomainSegments: 2, tlds: {allow: ['com', 'ar']}})
})

ruta.get("/", (req, res) => {
    let resultado = getPacientes();
    resultado
    .then((pacientes) => { res.status(200).json(pacientes)})
    .catch((error) => { res.status(404).json(error)})
})

ruta.get("/nombre/:nombre", (req, res) => {
    let resultado = getPacienteByName(req.params.nombre);
    resultado
    .then((pacientes) => { res.status(200).json(pacientes)})
    .catch((error) => { res.status(404).json(error)})
})

ruta.get("/ordenamiento", (req, res) => {
    let resultado = getPacientesOrdenados();
    resultado
    .then((pacientes) => { res.status(200).json(pacientes)})
    .catch((error) => { res.status(404).json(error)})
})

ruta.get("/paginacion", (req, res) => {
    let resultado = getPacientesPaginados();
    resultado
    .then((pacientes) => { res.status(200).json(pacientes)})
    .catch((error) => { res.status(404).json(error)})
})

ruta.get("/:id", (req, res) => {
    let resultado = getPacienteById(req.params.id);
    resultado
    .then((pacientes) => { res.status(200).json(pacientes)})
    .catch((error) => { res.status(404).json(error)})
})

ruta.post("/", (req, res) => {
    let body = req.body;

    const {error, value} = schema.validate({nombre: body.nombre, correo: body.correo})

    if(!error){
        let resultado = createPaciente(body);
        resultado
            .then((paciente) => { res.status(201).json(paciente)})
            .catch((error) => { res.status(404).json(error)})
    }else{
        res.status(400).json(error)
    }
})

ruta.put("/:id", (req, res) => {
    let body = req.body;
    let resultado = updatePaciente(req.params.id, body);
    resultado
        .then((paciente) => { res.status(201).json(paciente) })
        .catch((error) => { res.status(400).json(error) })
})

ruta.delete("/:id", (req, res) => {
    let resultado = deletePaciente(req.params.id);
    resultado
        .then((paciente) => { res.status(201).json(paciente) })
        .catch((error) => { res.status(400).json(error) })
})

export default ruta;