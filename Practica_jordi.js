function dividir1(dividendo, divisor){
  if (divisor == 0){
    //nose que devolver
    //Debeo avisar a main() del error
    //Aqui esta prohibido poner console.log()
    //Tampoco podemos asumir que hay
    //alguien mirando el programa
  }
  return dividendo / divisor
}
var  resultado = dividir1(8,4);
console.log(resultado);
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
function dividir2(dividendo, divisor, callback){
  if(divisor == 0){
    callback("division por 0", null) // "devolver"
    return
  }else{
    division = dividendo / divisor;
    callback(null, division);
  }
}
dividir2(7,2,
  function(error, resultado){
    if(error != null){
      console.log("la division fallo: "+ error)
    }else{
      console.log("el resultado es: "+ resultado)
    }
  })
  //-----------------------------------------------
  //-----------------------------------------------
  //-----------------------------------------------
  //-----------------------------------------------
  function dividir1(dividendo, divisor){
    if(divisor == 0){
      //throw es como un return pero para avisar que no ha ido bien
      throw "divisor es 0"
    }
    return dividendo / divisor
  }
  try{
    console.log("antes");
    var r = dividir1(7,8);
    console.log("despues");


  }catch (err){
    console.log("hubo una excepcion");

  }
  console.log(" final")
