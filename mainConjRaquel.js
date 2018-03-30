module.exports = Conjunto;
var Conjunto = require("./mainConjRaquel.js");

var c1 = new Conjunto();

//Añadimos Conjunto
c1.anadir(9);
c1.anadir(7);
c1.anadir(6);
c1.anadir(3);
c1.eliminar(3);
c1.contiene(7);
//Funciones
var unir = c1.unir([8,210,23]);
var diff = c1.diferencia([3, 10, 5]);
var t = c1.talla();
//Imprimir por Pantalla
console.log("Tamaño del Conjunto --> " + t);
console.log("Que contiene? --> " + c1.contiene(3));
console.log("Unir dos conjuntos --> " + unir);
console.log("Diferencia entre dos conjuntos --> " + diff);
//Vaciar un conjunto
c1.vaciar();
//Funciones
var t = c1.talla();
//Imprimir por Pantalla
console.log("Tamaño del Conjunto --> " + t);
console.log("Que contiene? --> " + c1.contiene(3));
