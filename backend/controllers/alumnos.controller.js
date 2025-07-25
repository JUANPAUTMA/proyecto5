import { TablaAlumnos } from "../models/alumnos.model.js";

TablaAlumnos.create({
    name: "Shaiel",
    edad:19,
    calificacion:4.4
})

export const test = ()=>{
    console.log("Llamando al controlador desde la app")
}//Poder llamar al controlador en app

