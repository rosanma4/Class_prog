//Crear un Array
console.log("Crear un Array = ")
var myNameArray = ["Chris" , "Bob" , "Jim"]
console.log(myNameArray);
//Añadir elementos a un Array
console.log("Añadir Elementos a un Array = ")
myNameArray[3] = "Andres"
console.log(myNameArray);
console.log(myNameArray[3]);
//Tamaño Array
console.log("Tamaño Array = ");
console.log(myNameArray.length);
console.log("fin Array");
//------------------------------------
console.log("array Asociativo = ");
datosPersonales = {
nombre: "pepe", apellidos: "perez perez", dni: 1234
}
console.log(datosPersonales);
console.log("Mostrar solamente el numero = ");
console.log(parseInt ("1234abc"));
console.log("Mostrar numero con decimal = ");
console.log(parseFloat ("1234.99912"));
//Crear un array Asociativo
console.log("array asociativo ejemplo 2 = ")
var ejemplo = {
  persona: {nombre: "Roman", edad: 26},
  coche: { marca : "Ford", modelo : "Fiesta"},
}
console.log (ejemplo.persona);
console.log (ejemplo.coche);
//------------------------------
for (var i in ejemplo){
  console.log(i+" ->" + ejemplo[i])
}
for (var i in datosPersonales){
  console.log(i+" ->" + datosPersonales[i])
}
//------------------------------
for (var i in ejemplo){
  for (var j in ejemplo[i]){
    console.log(i + " -> " + j + " -> " + ejemplo[i][j])
  }
}
//-------------------------------
var lista = [1, 2, 3, 79, -1]
for (var t = 0; t < lista.length; t++) {
  console.log(lista[t])
}
