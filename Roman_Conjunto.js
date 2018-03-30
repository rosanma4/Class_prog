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
    while(this.losElementos.length > 0){
      this.losElementos.pop();
    }
  }
  //----------------------------------------------------------
  unir(array){
    for (var i = 0; i <= array.length - 1; i++) {
      this.losElementos.push(array[i]);
    }
    return this.losElementos;
  }
  //----------------------------------------------------------
  diferencia(array){
    var a = [], diff = [];

    for (var i = 0; i < this.losElementos.length; i++) {
        a[this.losElementos[i]] = true;
    }

    for (var i = 0; i < array.length; i++) {
        if (a[array[i]]) {
            delete a[array[i]];
        } else {
            a[array[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
  }

}
