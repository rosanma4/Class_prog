module.exports = Conjunto;
var Conjunto = require("./conjuntoRoman.js");

var c1 = new Conjunto();

//Añadir conjunto
c1.anadir(2);
c1.anadir(1);
c1.anadir(3);

c1.contiene(3);

c1.anadir(5);
c1.eliminar(5);

var unir = c1.unir([8,210,23]);
var diff = c1.diferencia([3, 10, 5]);

//Declarar Funciones
var t = c1.talla();

//Imprimir por Pantalla
console.log("Conjunto 1 tamaño --> " + t);
console.log("Conjunto 1 contiene 3 --> " + c1.contiene(3));
console.log("Conjunto unir --> " + unir);
console.log("Conjunto diferencia --> " + diff);

c1.vaciar();

//Declarar Funciones
var t = c1.talla();

//Imprimir por Pantalla
console.log("Conjunto 1 tamaño --> " + t);
console.log("Conjunto 1 contiene 3 --> " + c1.contiene(3));
