import Sesion from "../models/sesiones_model.js"

async function getSesiones(){
    let sesiones = await Sesion.find();
    return sesiones;
}

export {getSesiones}