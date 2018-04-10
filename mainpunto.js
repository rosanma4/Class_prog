var PUNTO = require ("./punto.js")
var punto1 = new PUNTO (1,2);
var punto2 = new PUNTO (30,2);
console.log(punto1);
console.log(punto2);
console.log(punto1.getX());
console.log(punto1.getY());
console.log(punto1.distancia(punto2));
console.log(punto1.suma(punto2));
