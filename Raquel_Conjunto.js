const NO_ESTA = -1

module.exports = class Conjunto{

  constructor(){
    this.losElementos = []
  }

  //----------------------------------------------------------
  //talla:
  //Comprobar el tamaño del array
  //----------------------------------------------------------

  talla(){
    return this.losElementos.length;
  }

  //----------------------------------------------------------
  //DondeEsta:
  //Para poder comprobar donde esta ubicado un elemento del array
  //----------------------------------------------------------

  dondeEsta(num){
    for (var i = 0; i <= this.losElementos.length - 1; i++) {
      if(num == this.losElementos[i]){
        return i;
      }
    }
    return NO_ESTA;

  }

  //----------------------------------------------------------
  //Contiene:
  //Comprobamos si contiene el número indicado en el array devolviendo
  //verdadero o falso.
  //----------------------------------------------------------

  contiene(num){
    if(this.dondeEsta(num) == NO_ESTA){
        return false;
    }
    return true;
  }

  //----------------------------------------------------------
  //Añadir:
  //Añadimos valores al array creado en el constructor
  //----------------------------------------------------------

  anadir(num){
    this.losElementos.push(num)
  }

  //----------------------------------------------------------
  //Eliminar:
  //Eliminamos un valor especifico del array
  //----------------------------------------------------------
  //Cambia el contenido del array eliminado los elementos existentes

  eliminar(num){
    this.losElementos.splice(this.dondeEsta(num), 1);
  }

  //----------------------------------------------------------
  //Vaciar:
  //Vaciar un array entero
  //----------------------------------------------------------
  //Mientras que el tamaño del array siempre sea mayor que 0
  //eliminar elemento a elemento hasta que no quede ninguno

  vaciar(){
    while(this.losElementos.length > 0){
        this.losElementos.pop();
      }
  }

  //----------------------------------------------------------
  //Unir:
  //Apartir de un array nuevo lo juntamos con el primer array creado formaremos un conjunto nuevo
  //----------------------------------------------------------

  unir(array){
    for (var i = 0; i <= array.length - 1; i++) {
      this.losElementos.push(array[i]);
    }
    return this.losElementos;
  }

  //----------------------------------------------------------
  //Diferencia:
  //Tenemos un conjunto creado y creamos otro dentro de esta función, en la cual
  //la diferencia de los dos conjuntos nos dara un conjunto nuevo.
  //----------------------------------------------------------


  diferencia(array){
    var a = [], diff = [];

    //Por cada elemento del array losElementos, se añade como posición
    //a un array temporal, dando como valor true.

    for (var i = 0; i < this.losElementos.length; i++) {
        a[this.losElementos[i]] = true;
    }

    //Por cada elemento del array que se pasa como parametro, comparamos
    //si existe ese elemento en el array temporal, de ser asi se eliminara
    //del array temporal, si no se añadira el elemento del array que se pasa
    //como parametro.

    for (var i = 0; i < array.length; i++) {
        if (a[array[i]]) {
            delete a[array[i]];
        } else {
            a[array[i]] = true;
        }
    }

    //Por cada elemento que hay lo añadimos en un nuevo array para asi devolver
    //los valores.

    for (var k in a) {
        diff.push(k);
    }

    //Devolveremos el nuevo array final.

    return diff;
  }
  //----------------------------------------------------------
  //----------------------------------------------------------
}
