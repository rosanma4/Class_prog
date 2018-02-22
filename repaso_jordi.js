//Función Sincrona()
function invertir (palabra){
var res = []
  for (var i = 0; i <= palabra.length -1; i++) {
    res = res + palabra[palabra.length -1 -i]
  }
  return res;
}
//main()
var res = invertir("hola mundo");
console.log(res);
//Funcion Asincrona()
function invertir2 (palabra, callback){
  var res=[]
  for (var i = 0; i <= palabra.length -1; i++) {
  res = res+  palabra[palabra.length-i-1]
}
callback(res)
}
//main()
var res = invertir("hola")
invertir2("hola otra vez", function (resultado){
  console.log("dentro del callback:" + resultado)
});
//fin funciones
console.log("final funciones sincronas y asincronas")
