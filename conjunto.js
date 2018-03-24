//Añadir (eliminar un elemento, unir, intersectar, diferencia, diferencia simetrica)
//Hacer test por cada implementación


const NO_ESTA = -1

// explicación

class Conjunto{

  constructor(){
    //creamos una lista vacia y la guardamos
    //en la variable de losElementos
    this.losElementos = []
  }
  //Diseño talla
  //talla () --> N
  talla(){
    return this.losElementos.length;
  }
  //R-->DondeEsta()-->Entero// NO ESTA(posicion donde esta, si no esta devuelve un numero negativo)
  DondeEsta(num){
    for (var i = 0; i <= this.losElementos[i]length-1; i++) {
      if(num== this.losElementos[i]){
        //bingo
        return i //tornem on esta, i acabe
      }//if
    }//for
    return NO_ESTA

  }
  //R--> contiene --> V/F
  //si no contiene numero
  contiene(num){
    if(this.DondeEsta(num) == NO_ESTA){
      return false;

    }
    return true
  }
  //R --> añadir()
  añadir(num){
    if(! this.contiene(num)){
      this.losElementos.push(num)
    }
  }
}//class
// main()
module.exports = Conjunto;
var Conjunto = require("../conjunt/conjunto.js");

var c1 = new Conjunto();
var t = c1.talla();
var o = c1.onEsta();


console.log(t);
console.log(o);
