const fs 		= require( 'fs' )
const bcrypt 	= require( 'bcrypt' )

const password	= process.argv[2]

fs.readFile(__dirname + '/password.txt', 'utf-8', (err, data) => {
	if (err) {
		throw err
	}
	var hash = data

	bcrypt.compare(password, hash, (err, res) => {
		if(err) {
			throw err
		}
		
		console.log(res)
	})
})