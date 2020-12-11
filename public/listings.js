"use strict";

let userPosts = [];
let searchForm, levelsForm, playstylesForm, userPostsDiv;
let minRatingSlider, minRatingText, maxRatingSlider, maxRatingText;

async function initListings(e) {
	searchForm = document.forms["searchForm"];
	searchForm.addEventListener("submit", searchUsers);

	levelsForm = document.forms["filterLevel"];
	levelsForm.addEventListener("change", filterPosts);

	playstylesForm = document.forms["filterPlaystyle"];
	playstylesForm.addEventListener("change", filterPosts);

	userPostsDiv = document.querySelector("#userPostings");

	// Get all user posts from server
	userPosts = await getAllUserPosts();
	// userPosts = [
	// 	{
	// 		"name":"user",
	// 		"desc":"Hi!",
	// 		"level": "Gold",
	// 		"playstyle": "Aggressive",
	// 		"rating":8
	// 	},
	// 	{
	// 		"name":"user2",
	// 		"desc":"Hello!",
	// 		"level": "Silver",
	// 		"playstyle": "Defensive",
	// 		"rating":5.4
	// 	}

	// ];
	for(var user of userPosts) await renderUserPost(user, userPostsDiv);

	// Event Listeners for syncing rating slider and textboxes
	minRatingSlider = document.querySelector("#filterMinRating");
	maxRatingSlider = document.querySelector("#filterMaxRating");

	minRatingText = document.querySelector("#filterMinRatingText");
	maxRatingText = document.querySelector("#filterMaxRatingText");

	minRatingSlider.addEventListener("change", syncRating);
	minRatingSlider.addEventListener("change", filterPosts);
	minRatingText.addEventListener("change", syncRating);
	minRatingText.addEventListener("change", filterPosts);
	maxRatingSlider.addEventListener("change", syncRating);
	maxRatingSlider.addEventListener("change", filterPosts);
	maxRatingText.addEventListener("change", syncRating);
	maxRatingText.addEventListener("change", filterPosts);

	updateFilterOptions();

}

window.addEventListener("load", initListings);


async function searchUsers(e) {
	e.preventDefault();

	const reKeywords = new RegExp(searchForm.elements["keywords"].value.split(" ").join("|"), "i");
	console.log(reKeywords);
	// Get all user posts from server
	userPosts = await getAllUserPosts()
	userPosts = userPosts.filter(user =>
		(user.name.match(reKeywords) || user.desc.match(reKeywords) || user.PlayedGame.match(reKeywords) && user.level.match(reLevel) && user.playstyle.match(rePlaystyle)));

	clearUserPosts(userPostsDiv);
	// userPosts = [
	// 	{
	// 		"name":"user",
	// 		"desc":"Hi!",
	// 		"level": "Gold",
	// 		"playstyle": "Aggressive",
	// 		"rating":8
	// 	},
	// 	{
	// 		"name":"user2",
	// 		"desc":"Hello!",
	// 		"level": "Silver",
	// 		"playstyle": "Defensive",
	// 		"rating":5
	// 	}

	// ];
	// userPosts = userPosts.filter(user =>
	// 	(user.name.match(reKeywords) || user.desc.match(reKeywords)));

	// clearUserPosts(userPostsDiv);
	

	for(var user of userPosts) await renderUserPost(user, userPostsDiv);
	updateFilterOptions();
}

function updateFilterOptions() {
	const levelsList = [];
	const playstylesList = [];

	for (let i = 0; i < userPosts.length; i++) {
		if(!levelsList.includes(userPosts[i].level))
			levelsList.push(userPosts[i].level);
		if(!playstylesList.includes(userPosts[i].playstyle))
			playstylesList.push(userPosts[i].playstyle);
	}

	updateFilterForms(levelsList, playstylesList);
}

async function filterPosts(e) {
	const checkedLevels = levelsForm.querySelectorAll("input:checked");
	const checkedPlaystyles = playstylesForm.querySelectorAll("input:checked");

	const newUsers = userPosts.filter(user => isValidUser(user, checkedLevels, checkedPlaystyles));

	clearUserPosts(userPostsDiv);
	for(var user of newUsers) await renderUserPost(user, userPostsDiv);
}

function isValidUser(user, levelsAllowed, playstylesAllowed) {
	let ratingMatch = minRatingSlider.value <= user.rating && user.rating <= maxRatingSlider.value;

	let levelMatch = levelsAllowed.length === 0;
	for(let i = 0; i < levelsAllowed.length; i++) {
		if(levelsAllowed[i].value === user.level) {
			levelMatch = true;
			break;
		}
	}

	let playstyleMatch = playstylesAllowed.length === 0;
	for(let i = 0; i < playstylesAllowed.length; i++) {
		if(playstylesAllowed[i].value === user.playstyle) {
			playstyleMatch = true;
			break;
		}
	}

	return ratingMatch && levelMatch && playstyleMatch;
}

function syncRating(e) {
	const elementID = this.id.substring(6, 9); //Min or Max
	const elementType = this.type;

	renderRatingValue(elementID, elementType);
}

function formatAmount(amt) {
	try {
		return parseFloat(amt).toLocaleString();
	} catch {
		return "0";
	}
}

/** DOM MANIPULATING FUNCTIONS */
function updateFilterForms(levelsList, playstylesList) {
	// TODO: reset rating range
	minRatingSlider.value = minRatingText.value = 0;
	maxRatingSlider.value = maxRatingText.value = 10;

	// update level levels
	while(levelsForm.hasChildNodes())
		levelsForm.removeChild(levelsForm.lastChild);

	for(let i = 0; i < levelsList.length; i++) {
		const levelDiv = document.createElement("div");
		levelDiv.className = "custom-control custom-checkbox";
		levelDiv.innerHTML =
			`<input type="checkbox" class="custom-control-input" id="filterLevel${i}" name="filterLevel${i}" value="${levelsList[i]}">
			<label class="custom-control-label" for="filterLevel${i}">${levelsList[i]}</label>`;
		levelsForm.appendChild(levelDiv);
	}

	// update playstyles
	while(playstylesForm.hasChildNodes())
		playstylesForm.removeChild(playstylesForm.lastChild);

	for(let i = 0; i < playstylesList.length; i++) {
		const playstyleDiv = document.createElement("div");
		playstyleDiv.className = "custom-control custom-checkbox";
		playstyleDiv.innerHTML =
			`<input type="checkbox" class="custom-control-input" id="filterPlaystyle${i}" name="filterPlaystyle${i}" value="${playstylesList[i]}">
			<label class="custom-control-label" for="filterPlaystyle${i}">${playstylesList[i]}</label>`;
		playstylesForm.appendChild(playstyleDiv);
	}
}

function renderRatingValue(elementID, elementType) {
	let srcElement;
	let destElement;
	// Determine if slider was changed or text was changed
	if (elementType == "range") {
		srcElement = document.querySelector(`#filter${elementID}Rating`);
		destElement = document.querySelector(`#filter${elementID}RatingText`);
		destElement.value = formatAmount(srcElement.value); //format the value if it's a textbox
	} else {
		srcElement = document.querySelector(`#filter${elementID}RatingText`);
		destElement = document.querySelector(`#filter${elementID}Rating`);
		destElement.value = srcElement.value.split(',').join('');
	}

}