let searchForm, messageForm, updateForm;

//Find the user name based on current URL.
const pathArray = window.location.pathname.split('/');
const username = "user"
// let username = pathArray[pathArray.length-1];
// const user = getUserByName(username);
const user = {username: "user", password: "user", About: "Hello, I'm user.", Rate: 8,
	Language: "English", Level: "Gold", PlayStyle: "Aggressive", PlayTime: 10, ReportedTime: 1,
	PlayedGame: ["PUBG"], MessageReceived: [{"content":"Hello, I'm interesting to form team with you, please dm me if you are interested.",
		username:"user2", time:"2020/10/31"}], "CommentReceived": [{content: "Awesome Teammate!", username:"User2",
		time: "2020/11/01", rate:9}, {content: "Would never play with him again.", username:"User3",
		time: "2020/10/24", rate:1}]
}

async function initListings(e) {
	searchForm = document.forms["searchForm"];
	searchForm.addEventListener("submit", searchUsers);

	let userMessageDiv = document.querySelector("#messageBoard");
	await renderUserMessageBoard(username,userMessageDiv)

	let userProfileDiv = document.querySelector("#userProfile");
	await renderUserProfile(username, userProfileDiv)

	let userGameDiv = document.querySelector("#userInfo");
	await renderGallery(username, userGameDiv)

	let userCommentDiv = document.querySelector("#Comments");
	await renderUserCommentBoard(username, userCommentDiv)

	let NavBar = document.querySelector("#AccountMenu")
	const cur = "user";
	await renderNavBar(cur, NavBar)

	messageForm = document.forms["messageForm"];
	messageForm.addEventListener("submit", getMessage);

	updateForm = document.forms["updateForm"];
	updateForm.addEventListener("submit", editInfo);

}

window.addEventListener("load", initListings);

function getMessage(e) {
	e.preventDefault();

	// Get message
	const content = document.querySelector('#newMessage').value
	const sender = "user"; //default is the one who login, which is user in this page.
	const date = new Date()
	const month = date.getUTCMonth() + 1; //months from 1-12
	const day = date.getDate();
	const year = date.getFullYear();

	const today = year + "/" + month + "/" + day;
	user.MessageReceived.push({
		content:content,
		username:sender,
		time: today
	})
	console.log(user) //change to save to json
	displayMessage(content, sender)
}

function displayMessage(content, user)
{
	const MessageBoard = document.getElementById('message')
	// console.log(MessageBoard.childNodes[1]);
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
	user_info.children[0].replaceChild(span_about,user_info.children[0].children[5])
	user.About = new_about

	const new_lang=document.createTextNode(input_lang)
	const span_lang=document.createElement("span")
	span_lang.appendChild(new_lang)
	const user_lan = document.querySelector("#userInfo")
	user_info.children[0].replaceChild(span_lang,user_info.children[0].children[13])
	user.Language = new_lang

	const new_play=document.createTextNode(input_playstyle)
	const span_play=document.createElement("span")
	span_play.appendChild(new_play)
	const user_play = document.querySelector("#userInfo")
	user_info.children[0].replaceChild(span_play,user_info.children[0].children[21])
	user.PlayStyle = new_play

	console.log(user)
}

function report(username) {
  alert('report success');
  let reported = getUserByName(username);
  reported.status = "Reported"
	// save to json
  
}

async function searchUsers(e) {
	e.preventDefault()
	try{
	// const input_user= searchForm.querySelector('#newUser').value
	// window.location = "./profile/input_users"
	// window.open("./profile/input_users")
	}
	catch (err)
	{
		console.log(err)
	}


}