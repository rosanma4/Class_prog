var Conjunto = require("./Raquel_Conjunto.js");

var c1 = new Conjunto();

c1.anadir(9);
c1.anadir(7);
c1.anadir(6);
c1.anadir(3);

console.log("--------------");
var l = c1.talla();
console.log("El conjunto tiene una longitud de " + l);
console.log(c1);

console.log("--------------");
console.log("Eliminamos el 3 del array ");
c1.eliminar(3);
console.log(c1);

console.log("--------------");
console.log("El valor 7 está en la casilla " + c1.dondeEsta(7));
console.log("El valor 6 está en la casilla " + c1.dondeEsta(6));
console.log(c1);

console.log("--------------");
console.log("El array contiene  el 6 =  " + c1.contiene(6));
console.log("El array contiene el 3 =  " + c1.contiene(3));
console.log("--------------");
//Unir
console.log("El conjunto 2 estara formado por 8, 210, 23");
var c2 = c1.unir([8,210,23]);
console.log("Si unimos los dos conjuntos nos dara = " + c2);
console.log("--------------");

//Vaciar un conjunto
console.log("Si vaciamos el array nos saldra:");
c1.vaciar();
console.log(c1);
var l = c1.talla();
console.log("El tamaño del conjunto sera =  " + l);
console.log("--------------");
