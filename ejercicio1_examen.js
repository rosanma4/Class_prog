//examen 1/03/2018

//Pregunta 1
//----f()-----
function f(lista){
  lista.push( 77 )
  lista.push( 88 )
}
// -->lista
//        f()
// -->lista

//----g()-----
function g(lista){
  lista.length = 0
  lista.push( 77 )
  lista.push( 88 )
}

// -->
//        g()
// --> lista

//----h()-----
function h(lista){
  console log("*****")
  for(var e of lista){
    console.log (e)
  }
}

// --> lista
//        h()
// -->

//----MAIN-----
var lista 1 = [ 1, 22, 333]

//-----------------------------------
//-----------------------------------
//Pregunta 2
//Diseño, recibe --> texto y letra, devuelve --> V si el primero contiene el segundo
function comprobar ( texto, l, callback){
  callback (true);
  callback (false);
}



comprobar ("hola", 'o', function(respuesta1){
  comprobar ("hola",'a', function (respuesta2){
    if (respuesta1 && respuesta2){
      console.log("bingo");
    }
    })
  })

//-----------------------------------
//-----------------------------------
//Pregunta 3
//Contar s en buenos dias
var r = contar ("buenos dias", function (letra){
  if (letra == "s") {
    return true;
  }else{
    return false;
  }
})
console.log(r)

//-----------------------------------
// Diseña la funcion contar() Anónima
// texto / funcion(letra --> f() --> V/F) --> contar() --> Numero Entero

funcion contar ( texto, f){
  var n = 0;
  for (var l of texto){
    if (f(l) == true){
      n++;
    }
  } return n;
}
