const mongoose = require('mongoose')

// connect to our database
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/TeammateSearchAPI'

//const mongoURI = 'mongodb://localhost:27017/StudentAPI'


mongoose.connect(mongoURI, { useNewUrlParser: true});

module.exports = { mongoose }