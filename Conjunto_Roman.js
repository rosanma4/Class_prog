const NO_ESTA = -1

module.exports = class Conjunto{

  constructor(){
    this.losElementos = []
  }
  //----------------------------------------------------------
  talla(){
    return this.losElementos.length;
  }
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
  contiene(num){
    if(this.dondeEsta(num) == NO_ESTA){
        return false;
    }
    return true;
  }
  //----------------------------------------------------------
  //Añadiremos valores al array
  anadir(num){
    this.losElementos.push(num)
  }
  //----------------------------------------------------------
  //Realizaremos la unión de dos conjuntos a partir del comando concat
  //para formar uno nuevo
  unir(array){
    return this.losElementos.concat(array);
  }
  //----------------------------------------------------------
  //Vaciaremos un array desde la posición 0 hasta el tamaño que tenga ese array.
  vaciar(){
    this.losElementos.splice(0, this.losElementos.length);
  }
  //----------------------------------------------------------
  //Eliminaremos un valor que queramos del conjunto
  eliminar(num){
    this.losElementos.splice(this.dondeEsta(num), 1);
  }
  //----------------------------------------------------------
}; // Clase
