module.exports = Conjunto;
var Conjunto = require("./Roman_Conjunto.js");

var con1 = new Conjunto();

//Añadir conjunto
con1.anadir(2);
con1.anadir(1);
con1.anadir(3);

con1.contiene(3);

con1.anadir(5);
con1.eliminar(5);

var unir = con1.unir([8,210,23]);


//Declarar Funciones
var t = con1.talla();

//Imprimir por Pantalla
console.log("Conjunto 1 tamaño --> " + t);
console.log("Conjunto 1 contiene 3 --> " + con1.contiene(3));
console.log("Conjunto unir --> " + unir);


con1.vaciar();

//Declarar Funciones
var t = con1.talla();

//Imprimir por Pantalla
console.log("Conjunto 1 tamaño --> " + t);
console.log("Conjunto 1 contiene 3 --> " + con1.contiene(3));
