import express from "express"
import { getPacientes, getPacienteById ,createPaciente, updatePaciente, deletePaciente } from "../controllers/pacientes_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
    let resultado = getPacientes();
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
    let resultado = createPaciente(body);
    resultado
    .then((paciente) => { res.status(201).json(paciente)})
    .catch((error) => { res.status(404).json(error)})
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