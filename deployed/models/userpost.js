'use strict'

const mongoose = require('mongoose');
const validator = require('validator');

const postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	rating: {
		type: Number,
		required: true,
		validate: {
			validator: x => x >= 0 && x <=10,
			message: "Invalid rating"
		}
	},
	level: {
		type: String,
		required: true,
		trim: true
	},
	playstyle: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	PlayedGame: {
		type: Array,
		default: []
	}
});

const UserPost = mongoose.model('UserPost', postSchema)

module.exports = {UserPost}