module.exports = class punto {

  constructor() {
    if(arguments.length == 2) {
      console.log("Correcto: Me has pasado "+arguments.length)
      this.X = arguments[0];
      this.Y = arguments[1];
    } else {
      console.log("Error: Me has pasado "+arguments.length)
      this.X = 0;
      this.Y = 0;
    }
  }
  //----------------------------------------------------------------------------

  getX() {
    return this.X;
  }
  //----------------------------------------------------------------------------

  getY() {
    return this.Y;
  }
  //----------------------------------------------------------------------------

 distancia(punto2) {

    var distancia;

    distancia = Math.sqrt(Math.pow(punto2.getX() - this.X, 2) + Math.pow(punto2.getY() - this.Y, 2));

    return distancia;
  }
  //----------------------------------------------------------------------------

  suma(punto2) {
    var x;
    var y;
    x = this.X + punto2.getX();
    y = this.Y + punto2.getY();

    var resultado = new punto(x,y);
    return resultado;

  }
  //----------------------------------------------------------------------------

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
