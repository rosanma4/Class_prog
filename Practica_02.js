//readline - para leer lineas
const readline = require ("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
temporizador = setTimeout(tiempo, 5000);
function tiempo(){
  console.log("Tiempooooo")
  rl.close();
}
rl.question ("What do you think of Node.js?" , responder);
function responder (respuesta){
  console.log ("Thanks you for your valuable feedback: "+ respuesta);
  rl.question("Other question ? ", respuesta2);
}
function respuesta2(respuesta){
  console.log ("This is good "+ respuesta);
  rl.close();
  clearTimeout(temporizador);
}
//--------------------------------------
