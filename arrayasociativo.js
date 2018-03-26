//ejercicio
datosPersonales = {
nombre: "pepe", apellidos: "perez perez", dni: 1234
}
console.log(datosPersonales);
//--------------------------------
console.log(parseInt ("1234"));
console.log(parseInt ("1234abc"));
console.log(parseInt ("abc1234"));
console.log(parseInt ("1234"));
//--------------------------------
console.log(parseFloat ("1234.99912"));
//--------------------------------
var horario = {
  lunes: ["fisica", "matematicas", "inglés"],
  martes: ["fisica", "inglés"],
  miercoles: ["matematicas", "inglés"],
  jueves: [ "matematicas"],
  viernes: ["fisica", "matematicas", "inglés"],
}
console.log (horario);
//-------------------------------
var ejemplo = {
  persona: {nombre: "Roman", edad: 26},
  coche: { marca : "Ford", modelo : "Fiesta"},
}
console.log (ejemplo.persona);
console.log (ejemplo.coche);
//------------------------------
for (var i in ejemplo){
  console.log(i+" ->" + ejemplo[i])
}
for (var i in datosPersonales){
  console.log(i+" ->" + datosPersonales[i])
}
//------------------------------
for (var i in ejemplo){
  for (var j in ejemplo[i]){
    console.log(i + " -> " + j + " -> " + ejemplo[i][j])
  }
}
