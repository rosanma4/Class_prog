module.exports = Conjunto;
var Conjunto = require("./Raquel_Conjunto.js");

var c1 = new Conjunto();

c1.anadir(9);
c1.anadir(7);
c1.anadir(6);
c1.anadir(3);
console.log("--------------");
var t = c1.talla();
console.log("El tamaño del conjunto sera =  " + t);
console.log(c1);
console.log("--------------");
console.log("Eliminar el 3 del array");
c1.eliminar(3);
console.log(c1);
console.log("--------------");
console.log("El array contiene  el 6 =  " + c1.contiene(6));
console.log("El array contiene el 3 =  " + c1.contiene(3));
console.log("--------------");

console.log("El conjunto 2 estara formado por 8, 210, 23");
var unir = c1.unir([8,210,23]);
console.log("Si unimos dos conjuntos nos dara = " + unir);
console.log("--------------");

var diff = c1.diferencia([3, 10, 5]);
console.log("Que diferencia habra entre los dos conjuntos = " + diff);
console.log("--------------");

//Vaciar un conjunto
console.log("Si vaciamos el array nos saldra:");
c1.vaciar();
console.log(c1);
var t = c1.talla();
console.log("El tamaño del conjunto sera =  " + t);
console.log("--------------");
