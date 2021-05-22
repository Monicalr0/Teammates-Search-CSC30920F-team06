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

app.get('/users', async(req, res) => {
	try {
		const users = await User.find()
		res.send({ users }) // can wrap students in object if want to add more properties
	} catch(error) {
		log(error)
		res.status(500).send("Internal Server Error")
	}
})

//routes and functions
app.get('/posts', (req, res) => {
	UserPost.find({}).then((docs) => {
		res.send(docs);
	}).catch((error) => {
		res.status(400).send(sanitizeMongoError(error));
	})
})

app.get('/index', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/indexLoggedIn.html'))
})

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/login.html'))
})

app.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/register.html'))
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

/*** session handle **********************************/
// express-session for managing user sessions
const session = require('express-session')

/// Middleware for creating sessions and session cookies.
// A session is created on every request, but whether or not it is saved depends on the option flags provided.
app.use(session({
	secret: 'our hardcoded secret', // later we will define the session secret as an environment variable for production. for now, we'll just hardcode it.
	cookie: { // the session cookie sent, containing the session id.
		expires: 120000, // 2 minute expiry
		httpOnly: true // important: saves it in only browser's memory - not accessible by javascript (so it can't be stolen/changed by scripts!).
	},

	// Session saving options
	saveUninitialized: false, // don't save the initial session if the session object is unmodified (for example, we didn't log in).
	resave: false, // don't resave an session that hasn't been modified.
}));

// A route to login and create a session
app.post('/users/login', async (req, res) => {
	const username = req.body.username
	const password = req.body.password


	try {
		// Use the static method on the User model to find a user
		// by their email and password.

		const user = await User.findByNamePassword(username, password);

		if (!user) {
			res.redirect('/public/login.html');
		} else {
			// Add the user's id and email to the session.
			// We can check later if the session exists to ensure we are logged in.
			req.session.user = user._id;
			req.session.password = user.password;
			res.status(200).send('target found')
		}
	} catch (error) {
		// redirect to login if can't login for any reason
		if (isMongoError(error)) {
			res.status(500).redirect('/public/login.html');
		} else {
			log(error)
			res.status(400).redirect('/public/login.html');
		}
	}

})

/*** database router for adding user and admin **********************************/
// a POST route to *create* a student
app.post('/api/creatuser', async (req, res) => {


	// Create a user
	const user = new User({
		username: req.body.username,
		password: req.body.password,
		//creator: req.user._id // creator id from the authenticate middleware
	})


	// Save user to the database
	// async-await version:
	try {
		const result = await user.save()
		res.send(result)
	} catch(error) {
		 // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.

			{
				res.status(500).send('Internal server error')
			}



		} else {
			log(error.code)
			if (error.code==11000)
			{
				res.status(404).send('Dup Key')
			}
			else
			{
				res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
			}

		}
	}
})

app.post('/api/creatadmin', async (req, res) => {
	// log(req.body)

	// Create a admin
	const admin = new Admin({
		username: req.body.username,
		password: req.body.password,
		//creator: req.user._id // creator id from the authenticate middleware
	})


	// Save admin to the database
	// async-await version:
	try {
		const result = await admin.save()
		res.send(result)
	} catch(error) {
		log(error) // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	}
})

app.listen(port, () => {
	log(`Listening on port ${port}...`)
});
