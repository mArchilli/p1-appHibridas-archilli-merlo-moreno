import express from "express"
import { getPacientes } from "../controllers/pacientes_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
    let resultado = getPacientes();
    resultado
    .then((pacientes) => { res.status(200).json(pacientes)})
    .catch((error) => { res.status(404).json(error)})
})

export default ruta;