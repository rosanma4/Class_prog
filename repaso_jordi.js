//Función Sincrona()
function invertir (palabra){
var res = []
  for (var i = 0; i <= palabra.length -1; i++) {
    res = res + palabra[palabra.length -1 -i]
  }
  return res;
}
module.exports.invertir = invertir
//Funcion Asincrona()
function invertir2 (palabra, callback){
  var res=[]
  for (var i = 0; i <= palabra.length -1; i++) {
  res = res+  palabra[palabra.length-i-1]
}
callback(res)
}
module.exports.invertir2 = invertir2
