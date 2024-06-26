import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import pacientes_routes from "./routes/pacientes_routes.js"
import sesiones_routes from "./routes/sesiones_routes.js"

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("conectado a DB"))
  .catch(() => console.log("error al conectar"))

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use ("/pacientes", pacientes_routes)
app.use ("/sesiones", sesiones_routes)

const port = process.env.PORT || 3002
app.listen(port)



