const Punto= require('/Punto.js')
var assert = require ('assert')
//----------------------------------------------
describe("Prueba constructor que recibe (x,y)",
function(){
  it("la x del punto (3,4) es 3", function(){
      var p0= new Punto(3,4)
      assert.equal(p0.getX(),3)
  })//it
  it("la y del punto (3,4) es 4")function(){
      var p0= new Punto(3,4)
      assert.equal(p0.getY(),4)
  })//it
})
