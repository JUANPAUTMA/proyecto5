import { Schema, model } from "mongoose";

const EsquemaAlumnos = new Schema({
    name:String,
    edad:Number,
    calificacion:Number
})//Creando una tabla

export const TablaAlumnos = new model("Reprobados", EsquemaAlumnos)