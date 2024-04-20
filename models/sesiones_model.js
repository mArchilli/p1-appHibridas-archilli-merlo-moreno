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
        type: Date,
        required: true
    },
    paciente:{
        type: String,
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