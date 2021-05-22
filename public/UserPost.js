"use strict"  

/** DOM MANIPULATING FUNCTIONS */
async function renderUserPost(userPost, userPostsDiv) {
	const postDiv = document.createElement("div")  
	let link = userPost.name  
	if(link){
		if (window.location.href.indexOf('index') == -1)
			link = window.location.href + link  
		else
			link = window.location.href.substring(0, window.location.href.indexOf('index')) + link

	}
	postDiv.className = "card w-100 mb-3"  
	postDiv.innerHTML = `
	<div class="row card-body">
		<img class="col-sm-3 userListingImg" src="img/${userPost.name}.jpg" alt="sans"/>
		<div class="col-sm-9">
			 <h5 class="card-title">${userPost.name}</h5>
		 	<h6 class="card-subtitle mb-2 text-muted">
				 <button type="button" class="rating btn btn-outline-warning mr-2 my-r">
				 	<i class="fas fa-star">
					 	${userPost.rating}
					 </i>
				 </button>
				 <button type="button" class="level btn btn-outline-danger mr-2 my-r">
				 	<i class="fas fa-crown">
					 	${userPost.level}
					 </i>
				 </button>
				 <button type="button" class="playstyle btn btn-outline-info mr-2 my-r">
				 	<i class="fas fa-gamepad-alt">
					 	${userPost.playstyle}
					 </i>
			 	</button>
		 	</h6>
		 	<p class="card-text">
				 ${userPost.desc}
		 	</p>
			<a href=${link} class="btn btn-primary">Detail</a>
	 	</div>
	
	</div>`  

	userPostsDiv.appendChild(postDiv)  
}

function clearUserPosts(userPostsDiv) {
	// delete all user post entries in DOM
	while(userPostsDiv.hasChildNodes())
		userPostsDiv.removeChild(userPostsDiv.lastChild)  
}

/** BACKEND INVOLVING FUNCTIONS */
async function createUserPost(userPost) {
	// Should send the new post entry to the server
	// so the server can store the entry in the db
	const url = '/post'  
	const request = new Request(url, {
	        method: 'post',
	        body: JSON.stringify(userPost),
	        headers: {
	            'Accept': 'application/json, text/plain, */*',
	            'Content-Type': 'application/json'
	        },
	    })  
	const res = await fetch(request)  
	const json = await res.json()  
	if(json.error) {
		return json  
	}
	else if(json.redirect) {
		window.location.href = json.redirect  
	}
	else {
		return json  
	}
}

async function deleteUserPost(userPostID) {
	// Should delete the given user post from db
	const url = `/post/${userPostID}`  
	const request = new Request(url, {
	        method: 'DELETE',
	        body: JSON.stringify({}),
	        headers: {
	            'Accept': 'application/json, text/plain, */*',
	            'Content-Type': 'application/json'
	        },
	    })  

	const res = await fetch(request)  
	return res.status === 200  
}

async function getAllUserPosts() {
	// Get all user posts from server
	const url = `/posts`  
    const request = new Request(url, {
        method: 'get',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    })  
    const res = await fetch(request)
    const json = await res.json()  
    if(json.error) {
		alert(json.error)  
	} else if(json.redirect) {
		window.location.href = json.redirect  
	}

    return json  
}



