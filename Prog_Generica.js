//Funciones Anonimas---------------
console.log("crear array = ")
var a =[1, 34, 78, 23, 45]
for (var i = 0; i <= a.length; i++) {
  console.log(a[i])
}
//---------------------------------
function imprimir(x){
  console.log(x)
}
//---------------------------------
for (var i = 0; i < a.length; i++) {
  console.log(a[i])
}
//---------------------------------
//Realiza un bucle con forEach llamando a la funcion
console.log ("Funcion forEach = ")
a.forEach( x=> console.log(x))
//---------------------------------
a.forEach((x) => {console.log(x)})
//Fin bucle forEach
//---------------------------------
//funcion "map" Para contruir un nuevo vector
console.log("Funcion map = ")
var b = a.map(x => x * 2)
console.log(b)
//---------------------------------
//reduce
console.log("reduce = ")
console.log(a.reduce((total, x) => total + x))
//Modulos de vector
console.log("modulos de vector")
var cuadrados = a.map(x => x * x)
var sumatorio = cuadrados.reduce((total, x) => total + x)
console.log("sumatorio = ")
console.log(sumatorio)
console.log("raiz cuadrada = ")
console.log(Math.sqrt(sumatorio))
//----------------------------------------
//devuelve los valores que cumplen la condicion
console.log("filter")
console.log(a.filter(x => x > 23))
//----------------------------------------
//devuelve true si todas las condiciones se cumplen
console.log("every")
console.log(a.every(x => x > 23))
console.log(a.every(x => x >0))
//----------------------------------------
//devuelve true si se cumplen almenos una vez la condicion
console.log("some")
console.log(a.some(x => x > 23))
//----------------------------------------
//devuelve el primer valor que cumple la condicion
console.log("find")
console.log(a.find(x => x > 23))
//----------------------------------------
//
console.log("find index")
console.log(a.findIndex(x => x >23))
//----------------------------------------
//ordena en orden ascendente el mismo array
console.log((a,b) => {
  if (a == b) {
    return 0
  }
  else if (a < b) {
    return -1
  }
  else {
    return 1
  }
})
//console.log(a.sort(a,b) => a - b)
//console.log(a.sort(a,b) => b - a)
