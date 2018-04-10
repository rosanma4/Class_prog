var PUNTO = require ("./punto.js")
var punto1 = new PUNTO (1,2);
var punto2 = new PUNTO (30,2);
var punto3 = new PUNTO (5,7);
console.log(punto1);
console.log(punto2);
console.log(punto1.getX());
console.log(punto1.getY());
console.log(punto1.distancia(punto2));
console.log(punto1.suma(punto2));
//console.log(PUNTO.distanciaTotal([punto1, punto2, punto3]));
var d1 = punto1.distancia(punto2);
var d2 = punto2.distancia(punto3);
var d3 = d1 + d2;
console.log(d1);
console.log(d2);
console.log(d3);
