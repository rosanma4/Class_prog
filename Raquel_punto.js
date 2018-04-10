module.exports = class punto {

  constructor() {
    //
    if(arguments.length == 2) {
      this.X = arguments[0];
      this.Y = arguments[1];
    } else {
      this.X = 0;
      this.Y = 0;
    }
  }
  //----------------------------------------------------------------------------
  // Devolveremos el primer parámetro del punto 1
  getX() {
    return this.X;
  }
  //----------------------------------------------------------------------------
  // Devolveremos el primer parámetro del punto 2
  getY() {
    return this.Y;
  }
  //----------------------------------------------------------------------------
  // La distancia que existe desde el punto 1 al punto 2
  distancia(punto2) {

    var distancia;

    distancia = Math.sqrt(Math.pow(punto2.getX() - this.X, 2) + Math.pow(punto2.getY() - this.Y, 2));

    return distancia;
  }
  //----------------------------------------------------------------------------
  // Suma de los dos puntos
  suma(punto2) {
    var x;
    var y;
    //suma del primer parámetro del punto 1 y punto 2
    x = this.X + punto2.getX();
    //suma del segundo parámetro del punto 1 y punto 2
    y = this.Y + punto2.getY();

    var resultado = new punto(x,y);
    return resultado;

  }
  //----------------------------------------------------------------------------
  // static no tienes que instanciar un objeto.
  // Si la lista es mayor de 2, que la recorra y saque la distancia de cada
  // punto con su consecutivo
  static distanciaTotal(lista) {

     let distancia = 0;

     if (lista.length > 2) {
       for (let i = 0; i < lista.length - 1; i++) {
         distancia += lista[i].distancia(lista[i + 1]);
       }
     }

     return distancia;
   }
  //----------------------------------------------------------------------------
}
//   CLASE
