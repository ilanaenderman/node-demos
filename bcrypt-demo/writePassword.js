const fs = require( 'fs')
const bcrypt = require('bcrypt');

const password = process.argv[2]

bcrypt.hash(password, 2, (err, hash) => {
	fs.writeFile(__dirname + '/password.txt', hash, (err) => {
		if (err) {
			throw err
		}
	})
})







