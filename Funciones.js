//-------------------Ejercicio-----------------------
function porDos(n, f){
  var res = 2 * n
  f(res);
}
porDos(8 , function (res){
  console.log(res)
})
porDos(25 , function (res){
  console.log(res)
})
//---------------------------------------------------
porDos(25,
  function(resul1){
    //ya tenemos el resultado = 25 * 2
  porDos(8,
    function(resul2){
      //ya tenemos el resultado = 8 * 2
      console.log("total = " + (resul1 + resul2))
    }
  )//8
}
)//25m
