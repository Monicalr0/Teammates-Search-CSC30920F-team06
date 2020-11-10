// import { createPopper } from '@popperjs/core';

// const popcorn = document.querySelector('#commentUser');
// const tooltip = document.querySelector('#tooltip');

// createPopper(popcorn, tooltip, {
//   placement: 'left-start',
// });

let userInfo = [];
let searchForm, messageForm, updateForm, commentTypeForm;

const Message = function(content, name) {
	this.content = content;
	this.name = name;
	this.Date = new Date();

}

async function initListings(e) {
	searchForm = document.forms["searchForm"];
	searchForm.addEventListener("submit", searchUsers);

	messageForm = document.forms["messageForm"];
	messageForm.addEventListener("submit", postMessage);

	updateForm = document.forms["updateForm"];
	updateForm.addEventListener("submit", editInfo);	
 
	commentTypeForm = document.forms["commentTypeForm"];
	commentTypeForm.addEventListener("change", filterComment);


	// Get all user Info from server
	userInfo = [
		{
			"name":"user",
			"About":"Hi!",
			"Rate": 8,
			"Language":"English",
			"level": "Gold",
			"playstyle": "Aggressive",
			"ReportedTims": 1
			"ReportedPercentage": 10
		}
	];
}

window.addEventListener("load", initListings);

function getMessage(e) {
	e.preventDefault();

	// Get message
	const content = document.querySelector('#newMessage').value
	const user = "user"; //default is the one who login, which is user in this page. 	
	displayMessage(content, user)
}

function displayMessage(content, user)
{
	const MessageBoard = document.getElementById('message')
	const date = new Date();
	const newMessage = document.createElement("div");
	newMessage.innerHTML = `<div class="card-body bg-light">
						 	<p>${content} </p>
						 	<strong>${user}</strong>
						 	<span class="alignright messageDate"> ${date}</span>
						 	<br>
				 		</div>`;
	MessageBoard.appendChild('newMessage');
}