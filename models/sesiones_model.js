import { ObjectId } from "bson"
import mongoose from "mongoose"

const sesionSchema = new mongoose.Schema({
    id:{
        type: ObjectId,
    },
    fecha:{
        type: Date,
        required: true
    },
    horario:{
        type: String,
        required: true
    },
    paciente:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pacientes',
        required: true
        },
    profesional:{
        type: String,
        required: true
    },
    duracion:{
        type: String,
        required: true
    },
    modalidad:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
    }
})

export default mongoose.model("sesiones", sesionSchema)