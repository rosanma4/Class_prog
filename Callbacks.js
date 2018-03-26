//----------------------------------------------
//Callback = Invoco una función pasándole como parámetro otra
//función (el callback) esta función parámetro se ejecuta cuando
//la función principal ha terminado de ejecutarse,
//o cuando a nosotros nos interese...
//Ejemplo:
console.log("1 ejercicio");
function hagoAlgo() {
    return 'Hola Roman!!';
}

console.log(hagoAlgo());
console.log("********************************************************");
// Prueba:
console.log("2 ejercicio");
function funcionPrincipal(callback){
 console.log('hago algo y llamo al callback avisando que terminé');
 callback();
}

funcionPrincipal(function(){
 console.log('terminó de hacer algo');
});
//La función funcionPrincipal se ejecuta recibiendo un argumento que es otra
//función y que se ejecuta después de que termine su labor llamando a callback
console.log("********************************************************");
//----------------------------------------------
//La función callback recibe argumentos que se envían desde la función
// funcionPrincipal
console.log("3 ejercicio");
function funcionPrincipal(callback){
 console.log('hago algo y llamo al callback avisando que terminé');
 callback("Roman");
}

funcionPrincipal(function(nombre){
 console.log('me llamo ' + nombre);
});
console.log("********************************************************");
