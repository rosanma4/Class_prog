var PUNTO = require ("./punto.js")
var punto1 = new PUNTO (5,5);
var punto2 = new PUNTO (10,3);
console.log("---------------");
console.log(punto1.getX());
console.log("---------------");
console.log(punto1.getY());
console.log("---------------");
console.log(punto1.distancia(punto2));
console.log("---------------");
console.log(punto1.suma(punto2));
console.log("---------------");
