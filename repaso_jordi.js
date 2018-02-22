//Función Sincrona()
function invertir (palabra){
var res = []
var tam = palabra.length()
  for (var i = 0; i <= tam -1; i++) {
    res = res + palabra[tam -1 -1]
  }
}
//main()
var res = invertir("hola mundo");
console.log(res);

///Funcion Asincrona()
function invertir2 (texto2, callback){

}
//main()
var res = invertir("hola")
invertir2("hola otra vez", function (resultado){

});
