module.exports = Conjunto;
var Conjunto = require("./conjunto.js");

var c1 = new Conjunto();
var c2 = new Conjunto();

//Añadir conjunto
c1.anadir(1);
c1.anadir(2);
c1.anadir(5);
c2.anadir(3);
c2.anadir(4);

//Declarar Funciones
var t = c1.talla();
var o = c2.talla();


//Imprimir por Pantalla
console.log("Conjunto 1 --> " + t);
console.log("Conjunto 2 --> " + o);
