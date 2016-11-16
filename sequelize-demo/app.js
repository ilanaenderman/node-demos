const Sequelize 	= require('sequelize');
const pg 			= require('pg')
const express		= require('express')

const db			= new Sequelize('postgres://floriandalhuijsen@localhost/example')
const app			= express( )

let Hat			= db.define('hat', {
	name: Sequelize.STRING,
	material: Sequelize.STRING,
    height: Sequelize.INTEGER,
    brim: Sequelize.BOOLEAN
})

//if force is true. Everytime you run the app it deletes the database.
//if force is false. It will keep the data and give you multiple inputs.

// route post
app.get('/hats', (req,res) => {
	console.log ('hats')
	Hat.findAll( ).then( hats => {
		res.send( hats )
	})
})

db.sync({force: true}).then( () => {
	console.log('db sync succesfully')
	Hat.create({
		name: 'cowboy hat',
		material: 'straw',
		height: '5',
		brim: 'true'
	}).then( hat => {
	console.log('hat created')
	})
})haS


// route users
app.get('/users', (req, res) => {
	console.log('users is send')
	send.res('users')
})


// listen
app.listen(8000, () => {
	console.log( 'Server running' )
} )