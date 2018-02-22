//funcion sincrona main()
var invertir = require("./repaso_jordi.js");
// funcion asincrona main()
var res = invertir.invertir("hola")
console.log(res);
invertir.invertir2("hola otra vez", function (resultado){
  console.log("dentro del callback:" + resultado)
});
