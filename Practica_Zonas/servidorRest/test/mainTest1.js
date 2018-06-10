
// --------------------------------------------------------
//
//
// --------------------------------------------------------

// --------------------------------------------------------
// --------------------------------------------------------
const assert = require ('assert')

const request = require ('request')

// --------------------------------------------------------
// --------------------------------------------------------
const IP_PUERTO="http://localhost:8080"

// --------------------------------------------------------
// main ()
// --------------------------------------------------------

//
//
//
describe( "Test 1 (GET zona)", function() {

	// ....................................................
	//
	// ....................................................
	it( "pruebo GET /zona/marjal", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/zona/marjal",
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200,
							  "¿respuesta no es 200?" )

				console.log (" ----- respuesta a GET /zona/marjal ---- ")
				// console.log ("       response = " + JSON.stringify(response))
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				var datosZona = JSON.parse( body )

				assert.equal( datosZona.vertices[0].nombreZona, "marjal" )
				assert.ok(body.includes("Gandia"))

				//
				//
				//
				hecho ()
			}
		) // post

	}) // it
	it( "pruebo que GET /zona/marjal/descripcion da 200", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/zona/marjal/descripcion",
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200,
								"¿respuesta no es 200?" )

				console.log (" ----- respuesta a GET /zona/marjal/descripcion ---- ")
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				var datosZona1 = JSON.parse( body )
				assert.equal( datosZona1, "marjal al lado del Grau de Gandia" )

				//
				//
				//
				hecho ()
			}
		) // post

	}) // it
	it( "pruebo que GET /zona/marjal/descripcion da 200", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/zona/marjal",
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200,
								"¿respuesta no es 200?" )

				console.log (" ----- respuesta a GET /zona/marjal/descripcion ---- ")
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				var datosZona1 = JSON.parse( body )
				assert.equal( datosZona1.descripcion, "marjal al lado del Grau de Gandia" )
				assert.ok(body.includes("Gandia"))

				//
				//
				//
				hecho ()
			}
		) // post

	}) // it
	it( "pruebo que GET /zona/marjal/vertice da 200", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/zona/marjal",
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200,
								"¿respuesta no es 200?" )

				console.log (" ----- respuesta a GET /zona/marjal/vertice ---- ")
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				var datosZona2 = JSON.parse( body )
				assert.equal( datosZona2.vertices[0].longitud, 0)
				assert.equal( datosZona2.vertices[0].latitud, 1)
				assert.ok(body.includes("1"))
				assert.equal( datosZona2.vertices[0].nombreZona, "marjal")

				//
				//
				//
				hecho ()
			}
		) // post

	}) // it

}) // describe
