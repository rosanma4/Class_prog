var ejemplo =
{
  persona: {
    nombre: "Roman",
    edad: 26,
    casas: ["Platja","Albasete"]
  },
  coche: {
    marca : "Ford",
    modelo : "Fiesta",
    ruedas: ["Rueda 1","Rueda 2"]
  },
}
//console.log (ejemplo.persona);
//console.log (ejemplo.coche);
//------------------------------
/*
for (var i in ejemplo){
  console.log(i+" ->" + ejemplo[i])
}

for (var i in datosPersonales){
  console.log(i+" ->" + datosPersonales[i])
}*/
//------------------------------
for (var i in ejemplo){ // Muestra el primer objeto (persona, coche)
  for (var j in ejemplo[i]){ // Muestra el objeto que esta dentro del primer objeto
    //Si el tamaño del arrray es mayor de 1 muestra por pantalla el valor de las casillas
     if (ejemplo[i][j].length > 1) {
      for (const value of ejemplo[i][j]) {
        console.log(value);
      }
    }else{
      console.log(ejemplo[i][j])
    }
  }
}
