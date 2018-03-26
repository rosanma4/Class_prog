//------------------------------------
console.log ("Bienvenido")
console.log ("Vamos a realizar un calculo simple")
//------------------------------------
//------------------------------------
var a = 5
console.log (a)
//------------------------------------
//------------------------------------
console.log ("Multiplicar por Dos")
//------------------------------------
//------------------------------------
function porDos(n){
  return n*2
}
console.log (porDos(a))
//------------------------------------
//------------------------------------
let b = 3
console.log(b)
//------------------------------------
//------------------------------------
for (let j = 0 ; j < 10; j++){
console.log(j);
}
//------------------------------------
//------------------------------------
const pi = 3.14
typeof(pi)
console.log(pi)
//------------------------------------
//------------------------------------
cadena = "hola"
typeof(cadena)
console.log(cadena)
//------------------------------------
//------------------------------------
z = true
typeof(z)
console.log(z)
//------------------------------------
//------------------------------------
var myNameArray = ["Chris" , "Bob" , "Jim"]
myNameArray[0]
console.log(myNameArray);
myNameArray[3] = "Andres"
console.log(myNameArray);
console.log(myNameArray[3])
console.log(myNameArray.length)
//------------------------------------
//------------------------------------
var lista = [1, 2, 3, 79, -1]
for (var t = 0; t < lista.length; t++) {
  console.log(lista[t])
}
//------------------------------------
//------------------------------------
var a = "cadena de texto"
console.log (a.charAt(0))
console.log (a.length)
//------------------------------------
//------------------------------------
var miCadena = "Hola Mundo"
var r = "";
for (var k = 0; k < miCadena.length; k++) {
  r = miCadena[k] + r
}
console.log(r)
//------------------------------------
//------------------------------------
var miCadena = "Hola Mundo"
var r = "";
for (var k = 0; k < miCadena.length; k++) {
  r = miCadena.charAt(k) + r;
}
console.log(r)
//------------------------------------
//------------------------------------
var miCadena = "Hola Mundo"
var r = "";
for (var k = miCadena.length - 1; k>= 0; k--) {
  r = r + miCadena.charAt(k);
}
console.log(r)
//------------------------------------
//------------------------------------
var a = "cadena de texto"
console.log(a.indexOf("texto"))
console.log(a.indexOf("de"))
console.log(a.includes(" de "))
console.log(a.indexOf(" de "))
console.log(a.split(" "))
//------------------------------------
//------------------------------------
var listaNum = [3, 5, 2, 7, 19]
console.log(listaNum);
console.log(listaNum.pop())
console.log(listaNum);
console.log(listaNum.push ("hola"))
console.log(listaNum);
console.log(listaNum.shift ("principio"))
console.log(listaNum);
console.log(listaNum.unshift("principio"))
console.log(listaNum);
//------------------------------------
//------------------------------------
