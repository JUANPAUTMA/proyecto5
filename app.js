import mongoose from "mongoose";//Conectar una base de datos
import dotenv from "dotenv";//Poder llenar lo que hay en .env
import cors from "cors";//Dar seguridad a un server
import express from "express";//Crear un servidor local
import {test} from "./backend/controllers/alumnos.controller.js"
//Importaciones de librerias

dotenv.config();
mongoose.connect(process.env.urlBD)//conectar con mongodb compass
.then(()=>{
    console.log("Funciona chingon la base de datos")
})
.catch((error)=>{
    console.log("No jalo la base", error)
})//Promesa de verificacion de funcionamiento

const app = express();//servidor realizado
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor, no escucha borroso")
})//Verificar si funciona el servidor

test();