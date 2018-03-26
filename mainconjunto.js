module.exports = Conjunto;
var Conjunto = require("./conjunto.js");

var c1 = new Conjunto();
c1.anadir(1);
c1.anadir(5);
c1.anadir(6);


var t = c1.talla();

console.log(t);
