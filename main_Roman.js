var Conjunto = require("./Conjunto_Roman.js");
var con1 = new Conjunto();


console.log("-----------------------AÑADIR Y VER TAMAÑO---------------------------------");
console.log(" ");
con1.anadir(1);
con1.anadir(2);
con1.anadir(3);
var t = con1.talla();
console.log("El conjunto sera de " + t +" valores");
console.log(con1);
console.log(" ");


console.log("------------------------METODO CONTIENE-----------------------------------");
console.log(" ");
console.log("El conjunto contiene el valor 1? --> " + con1.contiene(1));
console.log("El conjunto contiene el valor 50? --> " + con1.contiene(50));
console.log("El conjunto contiene el valor 7? --> " + con1.contiene(7));
console.log(" ");


console.log("---------------------------AÑADIR Y ELIMINAR------------------------------");
console.log(" ");
con1.anadir(4);
console.log("Damos otro valor al array en este caso un 4");
console.log(con1);
console.log("Ahora eliminaremos el valor 4 del array");
con1.eliminar(4);
console.log(con1);
console.log(" ");


console.log("----------------------------METODO UNIR-----------------------------------");
console.log(" ");
console.log("Vamos a realizar la union de dos conjuntos con los valores [5,6,7]")
var unir = con1.unir([5,6,7]);
console.log("Al realizar la unión se podra observar: " + unir);
console.log(" ");


console.log("----------------------------METODO VACIAR---------------------------------");
console.log(" ");
console.log("Ahora pondremos en practica el metodo vaciar un array");
con1.vaciar();
var t = con1.talla();
console.log("El conjunto sera de " + t +" valores");
console.log(con1);
console.log(" ");
console.log("--------------------------------------------------------------------------");
