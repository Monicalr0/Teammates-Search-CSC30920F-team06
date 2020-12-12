"use strict";

async function renderUserPost(user, userPostsDiv) {
	const postDiv = document.createElement("div");
	let link = user.Username;
	if(link)
		link = 'http://profile/' + link;
	postDiv.className = "card w-100 mb-3";
	postDiv.innerHTML = `
	<div class="row card-body">
                    
                      <img class="col-sm-3 userImg" src="img/${user.UserImg}" alt="Img Losing"/>
                    
                         <div class="col-sm-9">
                          
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                            <strong><h5>Username:</strong>&nbsp;&nbsp;
                              <a href="profile.html" class="profileImg">
                                
                              ${user.Username}
                              </a></h5></li>
                            <li class="list-group-item">
                            <form><strong><h5>Status:  </strong>${user.Status}</h5>&nbsp;&nbsp;
                              
                            </form><br>
                          
                              
                            </li>

                            <li class="list-group-item">
                                <strong><h5>Time Reported: </strong>${user.TimeReported} times</h5><br>
                              </li>
                              
                              <li class="list-group-item">
                                <strong><h5>Comments: </strong>${user.Comments} comments.</h5>
              
                              </li>
                            <li class="list-group-item">
                              <strong><h5>Inactive:${user.Inactive}</strong></h5>
                              <select class="form-control" id="sel1">
                              <option>3 days</option>
                              <option>1 month</option>
                              <option>3 month</option>
                              <option>forever</option>
                              </select><br>
                              <button class="btn btn-outline-secondary btn-sm InactiveButton">
                               
                             Inactive</button>

                            </li>
                            </ul>
                              
                            </div>                            
                        </div>`    
            

	userPostsDiv.appendChild(postDiv);
}

function clearUsers(userPostsDiv) {
	// delete all user post entries in DOM
	while(userPostsDiv.hasChildNodes())
		userPostsDiv.removeChild(userPostsDiv.lastChild);
}

// DATA BASE RELATE ACTION INACTIVE will be done in phase2

async function Inactive(user) {
	user.Inactive = "Inactive";
	// remove user from Database
}

