//funcion sincrona main()
var invertir = require("./repaso_jordi.js");
console.log(res);

// funcion asincrona main()
var res = invertir("hola")
console.log(res);
invertir2("hola otra vez", function (resultado){
  console.log("dentro del callback:" + resultado)
});
