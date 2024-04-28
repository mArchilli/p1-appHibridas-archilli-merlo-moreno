import express from "express"
import { getSesiones, createSesion, updateSesion, deleteSesion} from "../controllers/sesiones_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
    let resultado = getSesiones();
    resultado
    .then((sesiones) => { res.status(200).json(sesiones)})
    .catch((error) => { res.status(404).json(error)})
})

ruta.post("/", (req, res) => {
    let body = req.body;
    let resultado = createSesion(body);
    resultado
    .then((sesion) => { res.status(201).json(sesion)})
    .catch((error) => { res.status(404).json(error)})
})


ruta.put("/:id", (req, res) => {
    let body = req.body;
    let resultado = updateSesion(req.params.id, body);
    resultado
        .then((sesion) => { res.status(201).json(sesion) })
        .catch((error) => { res.status(400).json(error) })
})

ruta.delete("/:id", (req, res) => {
    let resultado = deleteSesion(req.params.id);
    resultado
        .then((sesion) => { res.status(201).json(sesion) })
        .catch((error) => { res.status(400).json(error) })
})

export default ruta;