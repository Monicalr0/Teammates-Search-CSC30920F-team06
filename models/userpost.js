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
	playStyle: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
});

const UserPost = mongoose.model('UserPost', postSchema)

module.exports = {UserPost}