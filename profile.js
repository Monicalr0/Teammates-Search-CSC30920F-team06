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
	// searchForm = document.forms["searchForm"];
	// searchForm.addEventListener("submit", searchUsers);

	messageForm = document.forms["messageForm"];
	messageForm.addEventListener("submit", getMessage);

	// updateForm = document.forms["updateForm"];
	// updateForm.addEventListener("submit", editInfo);	
 
	// commentTypeForm = document.forms["commentTypeForm"];
	// commentTypeForm.addEventListener("change", filterComment);


	// Get all user Info from server
	userInfo = [
		{
			"name":"user",
			"About":"Hi!",
			"Rate": 8,
			"Language":"English",
			"level": "Gold",
			"playstyle": "Aggressive",
			"ReportedTims": 1,
			"ReportedPercentage": 10
		}
	];
}

window.addEventListener("load", initListings);

function getMessage(e) {
	e.preventDefault();

	// Get message
	const content = document.querySelector('#newMessage').value
	console.log("getting content")
	const user = "user"; //default is the one who login, which is user in this page. 	
	displayMessage(content, user)
}

function displayMessage(content, user)
{
	const MessageBoard = document.getElementById('message')
	console.log(MessageBoard.childNodes[1]);
	const date = new Date();
	const month = date.getUTCMonth() + 1; //months from 1-12
	const day = date.getDate();
	const year = date.getFullYear();

	const newdate = year + "/" + month + "/" + day;
	const newMessage = document.createElement('div');
	newMessage.innerHTML = `<div class="card-body bg-light">
						 	<p>${content} </p>
						 	<strong>${user}</strong>
						 	<span class="alignright messageDate"> ${newdate}</span>
						 	<br>
				 		</div>`;
	MessageBoard.append(newMessage);
	MessageBoard.appendChild('newMessage');
}

function editInfo(e)
{
	e.preventDefault()
	// first get the input
	const input_about = updateForm.querySelector('#newAbout').value
	const input_lang = updateForm.querySelector('#newLan').value
	const input_playstyle = updateForm.querySelector('#newPlayStyle').value



	const new_about=document.createTextNode(input_about)
	const span_about=document.createElement("span")
	span_about.appendChild(new_about)
	const user_info = document.querySelector("#userInfo")
	//user_info.children[0].children[4].remove()
	user_info.children[0].replaceChild(span_about,user_info.children[0].children[5])

	const new_lang=document.createTextNode(input_lang)
	const span_lang=document.createElement("span")
	span_lang.appendChild(new_lang)
	const user_lan = document.querySelector("#userInfo")
	//user_info.children[0].children[4].remove()
	user_info.children[0].replaceChild(span_lang,user_info.children[0].children[13])

	const new_play=document.createTextNode(input_playstyle)
	const span_play=document.createElement("span")
	span_play.appendChild(new_play)
	const user_play = document.querySelector("#userInfo")
	//user_info.children[0].children[4].remove()
	user_info.children[0].replaceChild(span_play,user_info.children[0].children[21])
}