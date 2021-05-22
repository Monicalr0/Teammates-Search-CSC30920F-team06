// import { createPopper } from '@popperjs/core';

// const popcorn = document.querySelector('#commentUser');
// const tooltip = document.querySelector('#tooltip');

// createPopper(popcorn, tooltip, {
//   placement: 'left-start',
// });

let userInfo = [];
let userComments = [];
let searchForm, messageForm, updateForm, commentTypeForm, commentCard;

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

	// commentCard = document.querySelector("#commentCard")


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

	userComments = [
		{
			"name": "user2",
			"userImage": 2,
			"date": "2020/11/01",
			"rate": 9,
			"comment": "Awesome Teammate!"

		},

		{
			"name": "user3",
			"userImage": 3,
			"date": "2020/10/24",
			"rate": 0,
			"comment": "Would never play with him again."
		}
	];
}

window.addEventListener("load", initListings);

function getMessage(e) {
	e.preventDefault();

	// Get message
	const content = document.querySelector('#newMessage').value
	console.log("getting content")
	const user = "Un Logged In User"; //default is the one who login, which is user in this page. 	
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
}

function report() {
  alert('report success');
  
}

// async function filterComment(e) {
// 	const checkedRate = commentTypeForm.querySelectorAll("input:checked");
// 	console.log(checkedRate);

// 	const newComments = userComments.filter(comment => isValidComment(comment, checkedRate));

// 	clearUserPosts(commentCard);
// 	for(var comment of newComments) await printComment(comment, commentCard);
// }

// function isValidComment(comment, checkedRate) {

// 	let checkedRateMatch = checkedRate.length === 0;
// 	for(let i = 0; i < checkedRate.length; i++) {
// 		if(checkedRate[i].value == "All") {
// 			const maxAllowedRate = 10;
// 			const minAllowedRate = 0;
// 			break;
// 		}
// 		else if(checkedRate[i].value == "Rate > 5")
// 		{
// 			const maxAllowedRate = 10;
// 			const minAllowedRate = 5;
// 			break;
// 		}
// 		else{
// 			const maxAllowedRate = 5;
// 			const minAllowedRate = 0;
// 			break;
// 		}
// 	}

// 	// console.log(checkedRate);
// 	// if(checkedRate == "All")
// 	// {
		
// 	// }
// 	// else if(checkedRate == "Rate > 5")
// 	// {
// 	// 	const maxAllowedRate = 10;
// 	// 	const minAllowedRate = 5;
// 	// }
// 	// else{
// 	// 	const maxAllowedRate = 5;
// 	// 	const minAllowedRate = 0;
// 	// }

// 	let ratingMatch = minAllowedRate <= comment.rate && comment.rate <= maxAllowedRate;

// 	return ratingMatch;
// }

// function clearComment(commentCard) {
// 	// delete all comment post entries in DOM
// 	while(commentCard.hasChildNodes())
// 		commentCard.removeChild(commentCard.lastChild);
// }

// async function printComment(comment, commentCard) {
// 	const commentDiv = document.createElement("div");
// 	// let link = userPost.name;
// 	// if(link)
// 	// 	link = 'http://profile/' + link;
// 	commentDiv.className = "card-horizontal";
// 	commentDiv.innerHTML = `
// 	<div class="image-square-wrapper">
//     	<img src='user${comment.userImage}.jpg, alt="User Profile Picture", class = "
//         othersProfilePicture" id = 'commentUser'>
//     </div>

//     <div class = "card-body">
//     	<div class = "commentUserInfo">
//     		<strong>${comment.name}</strong> 
//     		<span class="commentDate">${comment.date}</span>
//     		<br>
//     		<strong>Rate:</strong><span> <i class="fas fa-star"></i> ${comment.rate} </span>
//     	</div>
//     	<hr>
//     	<div>
//     		<p class = "commentContent"> 
//         	${comment.comment}
//     		</p>
//     		<a href="#" class="btn btn-outline-secondary btn-sm" id= reportComment>Report</a>
//     	</div>
//     </div>`;

// 	commentCard.appendChild(commentDiv);
// }