const NO_ESTA = -1

module.exports = class Conjunto2{

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
  anadir(num){
    this.losElementos.push(num)
  }
  //----------------------------------------------------------
  eliminar(num){
    this.losElementos.splice(this.dondeEsta(num), 1);
  }
  //----------------------------------------------------------
  vaciar(){
    this.losElementos.splice(0, this.losElementos.length);
    }
  }
  //----------------------------------------------------------
  unir(array){
    return this.losElementos.concat(array);
  }
  //----------------------------------------------------------
}
