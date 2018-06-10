
// ---------------------------------------------------------------------
// logica.js
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
const ConexionBD = require( "./ConexionBD.js" )

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
class Logica {

	// .................................................................
	//
	// nombreBD: Texto
	// -->
	//    f ()
	// -->
	// Terminado // via callback()
	//
	// .................................................................
	constructor( nombreBD, callback ) {
		this.laConexion = new ConexionBD( nombreBD, callback )
	}

	// .................................................................
	// .................................................................
	cerrar() {
		this.laConexion.cerrar()
	}

	// .................................................................
	//
	// datosZona: JSON {nombre: Texto, descripcion: Texto}
	// -->
	//    f ()
	// -->
	// void / Error // via callback( err )
	//
	// .................................................................
	nuevaZona( datosZona, callback ) {

		var textoSQL = 'insert into Zona values ( $nombre, $descripcion );'
		var datos = {
			$nombre: datosZona.nombre,
			$descripcion: datosZona.descripcion
		}

		this.laConexion.modificarConPrepared( textoSQL, datos, callback )

	} // ()

	// .................................................................
	//
	//    f()
	// -->
	// Terminado // via callbak()
	//
	// .................................................................
	borrarTodosLosDatos( callback ) {
		var self = this

		//
		// borrar primero los que dependen de otros (foreign key)
		//
		this.laConexion.modificar( "delete from Vertice;", function () {
			self.laConexion.modificar( "delete from Zona;", function () {
				callback()
			})
		})
	} // ()

	// .................................................................
	//
	// nombreZona: texto
	// vertice: JSON {latitud: R, longitud: R}
	// -->
	//    f ()
	// -->
	// void / Error // via callback( err )
	//
	// .................................................................
	nuevoVerticeParaZona( nombreZona, vertice, callback ) {

		var textoSQL = 'insert into Vertice values ( $nombre, $longitud, $latitud );'
		var datos = {
			$nombre: nombreZona,
			$longitud: vertice.longitud,
			$latitud: vertice.latitud
		}

		this.laConexion.modificarConPrepared( textoSQL, datos, callback )

	} // ()
	// .................................................................
	//
	//nombreZona: texto
	// -->
	//		f()
	// -->
	//descripcion: Texto 		//via callback(err, res)
	// .................................................................
	getDescripcionDeZona( nombreZona, callback){
		//console.log(" getDescripcionDeZona(): me han llamado ")

		// hay que consultar la base de datos
		var pregunta = "SELECT * from Zona WHERE nombre = '"+ nombreZona +"';"
		//console.log(pregunta);

		this.laConexion.consultar(pregunta, function(err, res){
				//mirar si hay error
				//si hay error devolver el error
				//y no seguir
				if(err){
					callback(err, null)	//devuelve el error
					return //no seguir
				}
				//error no hay

				//mira si el array esta vacio
				if (res.length ==  0){
					//vaya, no hay ninguna zona con ese nombre
					callback(null, null) //no hay error y no hay resultado
					return //no sigo
				}

				//error no hay y SI resultado
				callback(null, res[0])



		})


	}
	// .................................................................
	// .................................................................
	getCoordenadasDeUnaZona(nombreZona, callback){
		var b = "SELECT * FROM vertice WHERE nombreZona = '" + nombreZona +"';"
		this.laConexion.consultar(b, function(err, res){
			if (err){
				callback(err, null)
				return
			}
			if (res.length == 0){
			callback (null, null)
			return
		}
		callback(null, res)
		//console.log(res)
		})
	}
	// .................................................................
	// .................................................................
	getZona( nombreZona, callback ) {
		var that = this
		this.getDescripcionDeZona( nombreZona, function( err, res){
			if(err ){
				callback(err, null)
				return
			}
			if(!res){
				callback(null, null)
			return
			}
			that.getCoordenadasDeUnaZona(nombreZona, function(err2, res2){
				if(err2 ){
					callback(err2, null)
					return
				}
				if(!res2){
					res2=[]
				}
				var zona = {
					nombre: nombreZona,
					descripcion: res.descripcion,
					vertices: res2
				}
				callback (null, zona)
			})
		})


	} // ()

} // class

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
module.exports = Logica

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
