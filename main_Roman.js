module.exports = Conjunto;
var Conjunto = require("./Conjunto_Roman.js");
var con1 = new Conjunto();

//Añadir Valores al Conjunto
con1.anadir(1);
con1.anadir(2);
con1.anadir(3);
console.log(con1);
var t = con1.talla();
console.log("El conjunto sera de " + t +" valores");
con1.contiene(3);
console.log("El conjunto contiene el valor 3? --> " + con1.contiene(3));
console.log("El conjunto contiene el valor 6? --> " + con1.contiene());
con1.anadir(5);
console.log("Damos otro valor al array en este caso un 5");
console.log(con1);
console.log("Ahora eliminaremos el valor 5 del array");
con1.eliminar(5);
console.log(con1);
console.log("Vamos a realizar la union de dos conjuntos con los valores [7,55,80]")
var unir = con1.unir([7,55,80]);
console.log("Al realizar la unión se podra observar: " + unir);
console.log("Ahora pondremos en practica el metodo vaciar un array")
con1.vaciar();
var t = con1.talla();
console.log("El conjunto sera de " + t +" valores");
console.log(con1);
