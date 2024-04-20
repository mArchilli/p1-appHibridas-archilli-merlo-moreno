import { ObjectId } from "bson"
import mongoose from "mongoose"

const pacienteSchema = new mongoose.Schema({
    id: {
        type: ObjectId,
    },
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fecNac: {
        type: Date,
        required: true
    },
    cobertura_medica: {
        type: String,
        required: true
    },
    educacion: {
        type: String,
        required: false
    },
    direccion: {
        type: String,
        required: true
    },
    estado_civil: {
        type: String,
        required: false
    },
    profesion: {
        type: String,
        required: false
    },
    cuil: {
        type: String,
        required: true
    },
    diagnostico: {
        type: String,
        required: false
    },
    representante: {
        type: String,
        required: false
    },

})

export default mongoose.model("pacientes", pacienteSchema);