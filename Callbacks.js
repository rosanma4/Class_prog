//----------------------------------------------
//Ejercicio Sencillo callback
var inicio = function (valor, callback){
  if(typeof callback === 'function'){ // Para verificar que callback es una función
    callback(valor);
  }else{
    console.log(valor);
  }
}
inicio ("Román", "asdasa");
// otra manera
console.log("********************************************************");
var inicio = function (valor, callback){
  if(typeof callback === 'function'){ // Para verificar que callback es una función y asi no da error 
    callback(valor);
  }else{
    console.log(valor);
  }
}
inicio ("Raquel", function(valor){
  console.log("Bienvenido "+ valor)
});
//----------------------------------------------
console.log("********************************************************");
// Procesar un array

var zfighters = ["Goku", "Vegeta", "Gohan", "Piccolo"];
  zfighters.forEach(function(name,index){
  console.log(index + 1 + ". " + name)
})

// Fin Procesar un array
//----------------------------------------------
console.log("********************************************************");
//----------------------------------------------
