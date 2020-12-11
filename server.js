/* server.js, with mongodb API */
'use strict';
const log = console.log

const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose')
mongoose.set('bufferCommands', false);  // don't buffer db requests if the db server isn't connected - minimizes http requests hanging if this is the case.
const { seed } = require('./db/seed');

// import the mongoose models
const { User } = require('./models/user')
const { Admin } = require('./models/admin')
const { UserPost } = require('./models/userpost')

// to validate object IDs
const { ObjectID } = require('mongodb')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())

/*** Helper functions below **********************************/
function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
	return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

/*** Webpage routes below **********************************/
/// We only allow specific parts of our public directory to be access, rather than giving
/// access to the entire directory.

// static js directory
app.use("/", express.static(path.join(__dirname + '/public')))
app.use("/css", express.static(__dirname + '/public/css'))
app.use("/img", express.static(__dirname + '/public/img'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
})

//Temp Function. For testing only, can be changed later.
app.get('/user', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/profile.html'))
})

app.get('/posts', (req, res) => {
	UserPost.find({}).then((docs) => {
		res.send(docs);
	}).catch((error) => {
		res.status(400).send(sanitizeMongoError(error));
	})
})

// Debug Routes
app.get('/seed/', (req, res) => {
	if(seed() == true){
		if(req.session) req.session.destroy();
		res.send("Database Seeded")
	} else{
		res.status(500).send("Seeding Failed");
	}
})

app.listen(port, () => {
	log(`Listening on port ${port}...`)
});
