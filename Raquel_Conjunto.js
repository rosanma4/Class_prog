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
  //Cambia el contenido del array eliminando los elementos existentes
  //elimina la posición del número del conjunto creado

  eliminar(num){
    this.losElementos.splice(this.dondeEsta(num));
  }

  //----------------------------------------------------------
  //Vaciar:
  //Vaciar un array entero
  //----------------------------------------------------------
  //Mientras que el tamaño del array siempre sea mayor que 0
  //eliminar elemento a elemento hasta que no quede ninguno

  /*vaciar(){
    while(this.losElementos.length > 0){
        this.losElementos.pop();
      }
  }*/
  vaciar(){
    this.losElementos.length = 0
    }

  //----------------------------------------------------------
  //Unir:
  //Apartir de un array nuevo lo juntamos con el primer array creado y formaremos un conjunto nuevo
  //----------------------------------------------------------

  unir(array){
    for (var i = 0; i <= array.length - 1; i++) {
      this.losElementos.push(array[i]);
    }
    return this.losElementos;
  }

} // class Conjunto
