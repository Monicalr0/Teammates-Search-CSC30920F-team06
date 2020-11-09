let numberOfUsers = 0;
let numberOfPostings = 0;

const libraryUser = []
const Postings = []
const Teams = []

//User class
class User {
	constructor(username, status) {
		this.username = username;
		this.status = status;
		this.comment = null;

		// set user ID
		this.userId = numberOfUsers;
		numberOfUsers++;
	}

	FormATeam(others) {
		const self = this;
		if (this.status == 'Active') {
			// MAKE A TEAM FORMED BY this AND others(may not be one people)
		}
	}

	SendMessage(another, content) {
		const self = this;
		if (this.status != 'Inactive') {
			// Send Message content from this to another user
		}
	}

	Inactive() {
		// Inactive this user when report is not true

		const self = this; // keep book in scope of anon function (why? the call-site for 'this' in the anon function is the DOM window)
		setTimeout(function() {
			
			console.log('Inactive', self.username)
			changeToInactive(self);

		}, 3000)

	}
}

const Posting = function(commentname, becommentname, content, report) {
	this.commentname = commentname;// User who make this comment
	this.becommentname = becommentname;// User who been commented
	this.content = content;// Comment content
	this.report = report;//Is this a report or not

	numberOfPostings++;
}

libraryUser.push(new User('A', 'Active'));
libraryUser.push(new User('B', 'Problem'));
libraryUser.push(new User('C', 'Marked'));
libraryUser.push(new User('D', 'Inactive'));


function changeToProblem(User) {
	User.status = 'Problem';// Set status to Inactive
}

function changeToMarked(User) {
	User.status = 'Marked';// Set status to Inactive
}

function active(User) {
	User.status = 'Active';// Set status to Inactive
}

function changeToInactive(User) {
	User.status = 'Inactive';// Set status to Inactive
}

/* Select all DOM form elements you'll need. */ 
const PostingForm = document.querySelector('#ReportPostings');

