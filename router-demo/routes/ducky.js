const express = require ( 'express' )
const router = express.Router( )

router.route('/ducky')
	.all((req, res) => {
	//Creating a random number
	let randomness = Math.random( )
	//loggin the random number
	console.log( 'The initial random is ' + randomness)

	let powerme = (base, exp) => {
		console.log( 'Running a power function yay')
		let result = base
		for(var i = exp - 1; i >= 0; i--) {
			result = result * base
		}
		return result
	}

	//Utterly pointless for loop
	for( var i = 20; i>= 0; i--){
		randomness ++
		randomness --
		randomness *= 20
		let randomarray =  [1,3, 77, 99, 20, 40]
		for( var i = randomarray.length -1; i>= 0; i--){
			randomness += randomarray[i]
			randomness / 20
		}
	}
	res.send('Randomness is: ' + randomness )
})

module.exports = router
