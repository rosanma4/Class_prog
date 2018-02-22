//---------------------------------------
var a = 5
b = "hola"
console.log(a + b);
//---------------------------------------
console.log(a * b);
//---------------------------------------
var c = 3
var d = 7
console.log (c === d)
//---------------------------------------
var n = 0;
for( i = 0; i<=10; i++){
  n = n+ i;
}
console.log(n)
//---------------------------------------
//f es una funcion anónima
function porDos(n, f){
  var res = 2 * n;
  f(res) // = return
}
//---------------------------------------
//---------------Main--------------------
porDos(8 , function (res){
  console.log(res)
})
//---------------------------------------
//---------------Main2-------------------
//De esta manera no es anónima la funcion
//---------------------------------------
function antonioBanderas (res){
  console.log(res)
}
porDos (8, antonioBanderas)
//---------------------------------------
//---------------Main 3------------------
//la funcion setTimeout es asincrona y le pasamos el callback que llamara despues del tiempo.
//---------------------------------------
console.log(" antes ");
setTimeout (function() {
  console.log(" ha pasado un momento ")},2000);
  console.log(" despues ");

//----------------------------------------
console.log(" principio")
porDos(25,
  function(resul){console.log ("respuesta = " + resul)}
)
console.log(" fin ");
//----------------------------------------
function porDos(n , g){
  var res = 2 * n;

  setTimeout (
    function (){g (res)},1000);

}
//----------------------------------------
