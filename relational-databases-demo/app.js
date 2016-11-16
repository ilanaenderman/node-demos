const sequelize = require ('sequelize')
const express	= require ('express')
const app		= express()

let db = new sequelize( 'postgres://floriandalhuijsen@localhost/example')

//define model
let User = db.define( 'user', {
	name: sequelize.STRING,
	email: {type: sequelize.STRING, unique: true}
})

let Hat = db.define('hat', {
	name: sequelize.STRING,
	material: sequelize.STRING,
    height: sequelize.INTEGER,
    brim: sequelize.BOOLEAN
})

//define relations
User.hasMany( Hat )
Hat.belongsTo( User )


//set express routes
app.get('/ping', (req, res) => {
	res.send('pong')
})

app.get('/hats', (req, res) => {
	Hat.findAll({
		include: [ {
			model: User,
			attributes: ['name']
		} ]
	}).then( hats => {
		res.send( hats)
	})
})

app.get('/users', (req, res) => {
	User.findAll({
		attributes: ['name'],
		include: [ Hat ]
	}).then( users => {
		res.send( users)
	})
})

db.sync( {force:true} ).then( db => {
	console.log( 'synced')
	//create two demo users
	User.create({
		name: 'Ilana',
		email: 'ilana@hotmail.com'
	}).then( user  => {
		user.createHat({ 
			name: 'Ilanahat',
			material: 'banana',w
			height: 7,
			brim: true
		})
	})

	User.create({
		name: 'Elia',
		email: 'elia@hotmail.com'
	})

	//create some hats
	Hat.create({
		name: 'Top hat',
		material: 'felt',
		height: 2,
		brim: 'false'
	})
	Hat.create({
		name: 'Cowboy hat',
		material: 'straw',
		height: 5,
		brim: 'true'
	})
})

app.listen(8000, () => {
	console.log('server running')
})