//Esperar un tiempo y muestra en consola
setTimeout (() => {console.log("tiempo")}, 3000);
setTimeout (function tiempo(){console.log ("tiempooo")}, 2000);
setTimeout(tiempo2, 1000);
function tiempo2(){
  console.log("Tiempooooo")
}
//----------------------------
setTimeout(() => {
  console.log("tiempooooo 3 ");
  setTimeout(() => {
    console.log("tiempooooo 2")
  },2000);
  },3000);
//----------------------------
