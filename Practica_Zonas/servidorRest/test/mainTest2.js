
// --------------------------------------------------------
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
describe( "Test 2 (GET zona)", function() {

	// ....................................................
	//
	// ....................................................
	it( "pruebo que GET /zona/xeresa da 200 (vacío)", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/zona/xeresa",
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200)
				assert.ok(body.includes("null"))

				console.log (" ----- respuesta a GET /zona/xeresa ---- ")
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				//
				//
				//
				hecho ()
			}
		) // post

	}) // it
}) // describe
