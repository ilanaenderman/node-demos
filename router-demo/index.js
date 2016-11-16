
// https://expressjs.com/en/guide/routing.html
const express = require ( 'express' )
const app = express( )

let pingRouter = require( __dirname + '/routes/ping')
let duckyRouter = require(__dirname + '/routes/ducky')

app.use( '/routes', pingRouter ) 	//localhost:8000/routes/ping

app.use( '/animals',duckyRouter ) 	//localhost:8000/animals/ducky


//Listen port 8000
app.listen( 8000, ( ) => {
	console.log( 'Server running' ) 
})

