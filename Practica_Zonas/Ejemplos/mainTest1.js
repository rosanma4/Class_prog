
// --------------------------------------------------------
//
//
// --------------------------------------------------------

// --------------------------------------------------------
// --------------------------------------------------------
const Logica = require( "../Logica.js" )

var assert = require ('assert')

// --------------------------------------------------------
// main ()
// --------------------------------------------------------

//
//
//
describe( "Test 1 (probar a añadir zonas)", function() {

	// ....................................................
	//
	// ....................................................
	var laLogica = null
	before(  function( hecho ) {
		laLogica = new Logica(
			"../datos/Zonas.bd",
			function( err ) {
				assert.equal( null, err, " conexión a BD fallada: " + err)
				hecho()
			})
	}) // before

	// ....................................................
	//
	// ....................................................
	it( "borro datos ", function( hecho ){

		laLogica.borrarTodosLosDatos( function() {
			hecho()
		})

	}) // it

	// ....................................................
	//
	// ....................................................
	it( "inserto zona marjal", function( hecho ){

		var datos = {
			nombre: "marjal",
			descripcion: "marjal al lado del Grau de Gandia"
		}

		laLogica.nuevaZona( datos, function(err) {
			assert.ok( ! err, " ¿hay error? : " + err )
			hecho()
		})

	}) // it

	// ....................................................
	//
	// ....................................................
	it( "inserto un vertice para marjal", function( hecho ){

		var vertice = {
			longitud: 0, // X
			latitud: 1 // Y
		}

		laLogica.nuevoVerticeParaZona( "marjal", vertice, function( err ) {
			assert.ok( ! err, "" + err )

			hecho()
		})

	}) // it

	// ....................................................
	//
	// ....................................................
	it( "pruebo getDescripcionDeZona()", function( hecho ){
		laLogica.getDescripcionDeZona("marjal", function(err, res){

			assert.ok( ! err)
			assert.ok( res.includes("Grau") )
			assert.equal( err, null )
			//console.log( res )
			//console.log( err )
		})
		hecho()
	})

	// ....................................................
	//
	// ....................................................
	it( "pruebo getCoordenadasDeUnaZona()", function( hecho ){
		laLogica.getCoordenadasDeUnaZona("marjal", function(err, res){

			//console.log ( err )
			//console.log ( res )
			assert.ok( ! err)
			assert.ok( res.includes("1") )
			assert.ok( res.includes("0") )
			assert.equal( res[0].longitud, 0)
			assert.equal( res[0].latitud, 1)

		})
		hecho()
	})

	// ....................................................
	//
	// ....................................................
	it( "pruebo getZona()", function( hecho ){
		laLogica.getZona("marjal", function(err, res){
			//console.log(res);
			//console.log(zona)
			assert.ok( ! err)
			assert.equal( res[0].longitud, 0)
			assert.equal( res.includes("Grau"))
			assert.equal( res.zona.vertices[0].longitud, 0)






		})

		// llamo a getZona() y compruebo que me devuelve
		// lo que antes he guardado
		/*
		  COMPLETAR
		  laLogica.getZona(
		*/

			hecho()

	}) // it
	// ....................................................
	//
	// ....................................................
	it( "pruebo existeZona()", function( hecho ){
		laLogica.getCoordenadasDeUnaZona("marjal", function(err, res){


			assert.ok( ! err)
			assert.ok( true )
		})
		hecho()
	})

	// ....................................................
	//
	// ....................................................
	after( function() {
		laLogica.cerrar()
	})

}) // describe
