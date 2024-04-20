import express from "express"
import { getSesiones } from "../controllers/sesiones_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
    let resultado = getSesiones();
    resultado
    .then((sesiones) => { res.status(200).json(sesiones)})
    .catch((error) => { res.status(404).json(error)})
})

export default ruta;