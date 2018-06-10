
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
	it( "pruebo getZonas()", function( hecho ){

		// llamo a getZona() y compruebo que me devuelve
		// lo que antes he guardado
		/*
		  COMPLETAR
		  laLogica.getZona(
		*/

		//assert.equal( true, false, " FALTA HACER ESTE TEST " )
		laLogica.getZona("marjal", function ( hecho){
			//assert.strictEqual(err,null, "No devuelve error")
			assert.strictEqual(res.nombre, "marjal", "Es Correcto?")
			assert.strictEqual(res.descripcion, "marjal al lado del Grau de Gandia", "Es correcta?")
		})
		hecho()

	}) // it
	// ....................................................
	//
	// ....................................................
	it( "pruebo getDescripcionDeZona()", function( hecho ){
		laLogica.getDescripcionDeZona("marjal",
		function(err, res){
			laLogica.getZona("marjal", function ( hecho){
				assert.strictEqual(err,null, "No devuelve error")
				assert.strictEqual(res.nombre, "marjal", "Es Correcto?")
				assert.strictEqual(res.descripcion, "marjal al lado del Grau de Gandia", "Es correcta?")
			})
			hecho() 	// avisar que este mini-test ha terminado
		})
	}) // it
	// ....................................................
	//
	// ....................................................
	it( "pruebo getZonas()", function( hecho ){
		laLogica.getZona("marjal", function ( hecho){
			assert.strictEqual(err,null, "No devuelve error")
			assert.strictEqual(res[0].$longitud,0, "longitud primer vertice")
			assert.strictEqual(res[0].$latitud,1, "latitud primer vertice")
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
