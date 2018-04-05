module.exports = Conjunto;
var Conjunto = require("./Raquel_Conjunto.js");

var c1 = new Conjunto();

//Creamos los valores del array:

c1.anadir(9);
c1.anadir(7);
c1.anadir(6);
c1.anadir(3);
console.log(c1);
//Eliminamos un valor en concreto del array:

c1.eliminar(3);

//Averiguar si contiene un número el array:
c1.contiene(7);


//Funciones
var unir = c1.unir([8,210,23]);
var diff = c1.diferencia([3, 10, 5]);
var t = c1.talla();


//Imprimir por Pantalla

console.log(c1);
console.log("El tamaño del conjunto sera =  " + t);
console.log("El array contiene  el 6 =  " + c1.contiene(6));
console.log("Si unimos dos conjuntos nos dara = " + unir);
console.log("Que diferencia habra entre los dos conjuntos = " + diff);

//Vaciar un conjunto

c1.vaciar();

//Funciones

var t = c1.talla();

//Imprimir por Pantalla

console.log("El tamaño del conjunto sera =  " + t);
console.log("El array contiene =  " + c1.contiene(3));
