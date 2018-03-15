var sqlite3 = requiere ("sqlite3")
var bd = new sqlite3.database ("ruta de la base de datos")
// bd.all("select = from Persona;" ,
//     function (err, res){
//       if(err != null){
//         console.log("hay error");
//         return;
//       }
//       console.log("cantidad de filas = " + res.length);
//   });
function cuantos (ape, callback) {
  var textoSQL = "select * from Persona where apellido ='" + ape + "' ;"
  console.log(textoSQL);
  db.all(textoSQL, function(err, res){
    if(err != null){
           callback(0);
           return;
         }
         callback(res.length);
  })
};
//main
cuantos("perez", function(res){
  console.log(res);
});
