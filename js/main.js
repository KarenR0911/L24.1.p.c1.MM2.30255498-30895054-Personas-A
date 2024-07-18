/*PERSONAS-A 
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más 
mujeres o ambos por igual. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo */

import Personas from "./Personas.js";
import TodoPersonas from "./TodoPersonas.js";

let per1= new Personas("Luisa", "F");
let per2= new Personas("Ana", "F");
let per3= new Personas("José", "M");
let per4= new Personas("Carmen", "F");
let per5= new Personas("Rosa", "F");
let per6= new Personas("José", "M");
let per7= new Personas("María", "F");
let per8= new Personas("Luz", "F");
let per9= new Personas("Rafael", "M");
let per10= new Personas("Liz", "F");
let per11= new Personas("Marcos", "M");
let per12= new Personas("Leo", "M");

let todopersonas= new TodoPersonas()

todopersonas.procesarPersonas(per1);
todopersonas.procesarPersonas(per2);
todopersonas.procesarPersonas(per3);
todopersonas.procesarPersonas(per4);
todopersonas.procesarPersonas(per5);
todopersonas.procesarPersonas(per6);
todopersonas.procesarPersonas(per7);
todopersonas.procesarPersonas(per8);
todopersonas.procesarPersonas(per9);
todopersonas.procesarPersonas(per10);
todopersonas.procesarPersonas(per11);
todopersonas.procesarPersonas(per12);

let salida= document.getElementById("Salida")
salida.innerHTML= "A continuación se mostrarán los resultados: <br>"
salida.innerHTML+= `<br>El porcentaje de mujeres procesadas es: ${todopersonas.porcentajeMujeres().toFixed()}%`
salida.innerHTML+= `<br>${todopersonas.retornarMasPersonas()}`
