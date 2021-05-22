"use strict";
let Users = [];
let statusForm;
let UserDiv;

async function initListings(e) {
	
	statusForm = document.forms["filterCategories"];
	statusForm.addEventListener("change", filterPosts);

	UserDiv = document.querySelector("#User");

	
	Users = [
		{
			"Username":"It's me.I was reported",
			"UserImg":"ReportedUser.jpg",
			"Status":"Reported",
			"TimeReported": 3,
			"Comments": 1,
			"Inactive": ""
		},
		{
			"Username":"Hello, I am just a normal user.",
			"UserImg":"ReportUser.jpg",
			"Status":"Normal",
			"TimeReported": 0,
			"Comments": 5,
			"Inactive": ""
		}

	];
	for(var user of Users) await renderUserPost(user, UserDiv);

	// updateFilterOptions();

}

window.addEventListener("load", initListings);


function updateFilterOptions() {
	const statusList = [];

	for (let i = 0; i < Users.length; i++) {
		if(!statusList.includes(Users[i].Status))
			statusList.push(Users[i].Status);
	}

	// updateFilterForms(statusList);
}

async function filterPosts(e) {
	const checkedstatus = statusForm.querySelectorAll("input:checked");
	
	const newUsers = Users.filter(user => isValidUser(user, checkedstatus));

	clearUsers(UserDiv);
	for(var user of newUsers) await renderUserPost(user, UserDiv);
}

function isValidUser(user, statusAllowed) {
	
	let statusMatch = statusAllowed.length === 0;
	for(let i = 0; i < statusAllowed.length; i++) {
		if(statusAllowed[i].value === user.Status) {
			statusMatch = true;
			break;
		}
	}

	return statusMatch;
}

function formatAmount(amt) {
	try {
		return parseFloat(amt).toLocaleString();
	} catch {
		return "0";
	}
}

/** DOM MANIPULATING FUNCTIONS */
function updateFilterForms(statusList) {

	while(statusForm.hasChildNodes())
		statusForm.removeChild(statusForm.lastChild);

	for(let i = 0; i < statusList.length; i++) {
		const levelDiv = document.createElement("div");
		levelDiv.className = "custom-control custom-checkbox";
		levelDiv.innerHTML =
			`<input type="checkbox" class="custom-control-input" id="${statusList[i]}" name="${statusList[i]}" value="${statusList[i]}">
			<label class="custom-control-label" for="${statusList[i]}">${statusList[i]}</label>`;
		statusForm.appendChild(levelDiv);
	}
}
