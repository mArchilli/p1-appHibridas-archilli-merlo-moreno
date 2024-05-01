import express from "express"
import { getPacientes, getPacienteById , getPacienteByName, createPaciente, updatePaciente, deletePaciente, getPacientesOrdenados, getPacientesPaginados, getPacientesCobertMedica, getPacientesGenero } from "../controllers/pacientes_controller.js";
import Joi from "joi";

const ruta = express.Router();

const schema = Joi.object({
    nombre: Joi.string()
            .min(3)
            .max(20)
            .required(),
    correo: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: ['com', 'ar']}})
            .required(),
    genero: Joi.string()
            .min(3)
            .max(9),
    dni: Joi.string()
            .min(8)
            .max(8)
            .required(),
    telefono: Joi.string()
            .min(8)
            .max(20)
            .required(),
    fecNac: Joi.date()
            .iso() //ISO 8601 - Formato (YYYY-MM-DD)
            .required(),
    cobertura_medica: Joi.string()
            .min(7)
            .max(20)
            .required(),
    direccion: Joi.string()
            .min(10)
            .max(50)
            .required(),
    estado_civil: Joi.string()
            .min(5)
            .max(10),
    educacion: Joi.string()
            .min(5)
            .max(10),
    profesion: Joi.string()
            .min(5)
            .max(30),
    cuil: Joi.string()
            .min(11)
            .max(15),
    diagnostico: Joi.string()
            .min(3)
            .max(100),
    representante: Joi.string()
            .min(5)
            .max(20),
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

ruta.get("/cobertura_medica/:cobertura_medica", (req, res) => {
    let resultado = getPacientesCobertMedica(req.params.cobertura_medica);
    resultado
    .then((pacientes) => { res.status(200).json(pacientes)})
    .catch((error) => { res.status(404).json(error)})
})

ruta.get("/generos/:genero", (req, res) => {
    let resultado = getPacientesGenero(req.params.genero);
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

    const {error, value} = schema.validate({
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
        representante: body.representante
    })

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
    const {error, value} = schema.validate({
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
        representante: body.representante
    })
    if(!error){
        let resultado = updatePaciente(req.params.id, body);
            resultado
        .then((paciente) => { res.status(201).json(paciente) })
        .catch((error) => { res.status(400).json(error) })
    } else {
        res.status(400).json(error)
    }
    
})

ruta.delete("/:id", (req, res) => {
    let resultado = deletePaciente(req.params.id);
    resultado
        .then((paciente) => { res.status(201).json(paciente) })
        .catch((error) => { res.status(400).json(error) })
})

export default ruta;