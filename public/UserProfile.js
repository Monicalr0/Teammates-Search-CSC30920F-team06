"use strict"


async function renderUserProfile(username, userProfileDiv) {

    const user = await getUserByName(username);
    // const user = {username: "user", password: "user", About: "Hello, I'm user.", Rate: 8,
    //     Language: "English", Level: "Gold", PlayStyle: "Aggressive", PlayTime: 10, ReportedTime: 1,
    //     PlayedGame: ["PUBG"], MessageReceived: [{"content":"Hello, I'm interesting to form team with you, please dm me if you are interested.",
    //         username:"user2", time:"2020/10/31"}], "CommentReceived": [{content: "Awesome Teammate!", username:"User2",
    //         time: "2020/11/01", rate:9}, {content: "Would never play with him again.", username:"User3",
    //         time: "2020/10/24", rate:1}]
    // }
    // console.log(users);

    let profileDiv = document.createElement('div');
    profileDiv.className="d-flex justify-content-center"
    profileDiv.innerHTML = `
    <div class="card bg-light ">
            <img src="img/user.jpg" alt="User Profile Picture", class = "userProfilePicture">
            <li class = "socialList">
                <!-- this will be link to user account page  -->
                <a href="https://www.facebook.com/" class= "fa fa-facebook inline"></a><strong> ${user.username} </strong>
                <a href="https://twitter.com/home" class= "fa fa-twitter inline"></a> <strong> ${user.username} </strong>
            </li>
            
            <div class="text-align:center">
                <form id = "updateForm">
                    <input class="editInput" id='newAbout' type="text" placeholder="new About">
                    <br>
                    <input class="editInput" id='newLan' type="text" placeholder="new Language"><br>
                    <input class="editInput" id='newPlayStyle' type="text" placeholder="new Playstyle">
                    <input type="submit" value="Edit" class="btn-primary w-50">
                </form>
            </div>
    </div>

        <div class="card">
  <div class="userInfoCard" id="userInfo">
           <p> 
            <strong>Username: </strong> <span>${user.username}</span>
           <br><br>
           <strong>About: </strong> <span>${user.About}</span>
           <br><br>
            <strong>Rate: </strong> <i class="fas fa-star"></i> ${user.Rate}
           <br><br>
           <strong>Language: </strong> <span>${user.Language}</span>
            <br><br>
            <strong>Level:</strong> <span>${user.Level}</span>
            <br><br>
            <strong>PlayStyle:</strong> <span>${user.PlayStyle}</span>
            <br><br>
            <strong>Played Times: </strong> <span> ${user.PlayTime} </span>
            <strong>Reported Times: </strong> <span> ${user.ReportedTime} </span>
            <br><br>
            <strong>Played Game: </strong> 
            </p>
        </div>
    </div>
   </div>
    `;

    userProfileDiv.appendChild(profileDiv);


}

async function renderOthersUserProfile(username, userProfileDiv) {

    const user = await getUserByName(username);
    // const user = {username: "user", password: "user", About: "Hello, I'm user.", Rate: 8,
    //     Language: "English", Level: "Gold", PlayStyle: "Aggressive", PlayTime: 10, ReportedTime: 1,
    //     PlayedGame: ["PUBG"], MessageReceived: [{"content":"Hello, I'm interesting to form team with you, please dm me if you are interested.",
    //         username:"user2", time:"2020/10/31"}], "CommentReceived": [{content: "Awesome Teammate!", username:"User2",
    //         time: "2020/11/01", rate:9}, {content: "Would never play with him again.", username:"User3",
    //         time: "2020/10/24", rate:1}]
    // }
    // console.log(users);

    let profileDiv = document.createElement('div');
    profileDiv.className="d-flex justify-content-center"
    profileDiv.innerHTML = `
    <div class="card bg-light ">
            <img src="img/user.jpg" alt="User Profile Picture", class = "userProfilePicture">
            <li class = "socialList">
                <!-- this will be link to user account page  -->
                <a href="https://www.facebook.com/" class= "fa fa-facebook inline"></a><strong> ${user.username} </strong>
                <a href="https://twitter.com/home" class= "fa fa-twitter inline"></a> <strong> ${user.username} </strong>
            </li>
            
            <div class="text-align:center">
                    <a href="commentPage.html" class="btn btn-primary w-50 ">Comment</a>
            </div>
    </div>

        <div class="card">
  <div class="userInfoCard" id="userInfo">
           <p> 
            <strong>Username: </strong> <span>${user.username}</span>
           <br><br>
           <strong>About: </strong> <span>${user.About}</span>
           <br><br>
            <strong>Rate: </strong> <i class="fas fa-star"></i> ${user.Rate}
           <br><br>
           <strong>Language: </strong> <span>${user.Language}</span>
            <br><br>
            <strong>Level:</strong> <span>${user.Level}</span>
            <br><br>
            <strong>PlayStyle:</strong> <span>${user.PlayStyle}</span>
            <br><br>
            <strong>Played Times: </strong> <span> ${user.PlayTime} </span>
            <strong>Reported Times: </strong> <span> ${user.ReportedTime} </span>
            <br><br>
            <strong>Played Game: </strong> 
            </p>
        </div>
    </div>
   </div>
    `;

    userProfileDiv.appendChild(profileDiv);


}

async function renderGallery(username, userGameDiv)
{
    // const user = {username: "user", password: "user", About: "Hello, I'm user.", Rate: 8,
    //     Language: "English", Level: "Gold", PlayStyle: "Aggressive", PlayTime: 10, ReportedTime: 1,
    //     PlayedGame: ["PUBG"], MessageReceived: [{"content":"Hello, I'm interesting to form team with you, please dm me if you are interested.",
    //         username:"user2", time:"2020/10/31"}], "CommentReceived": [{content: "Awesome Teammate!", username:"User2",
    //         time: "2020/11/01", rate:9}, {content: "Would never play with him again.", username:"User3",
    //         time: "2020/10/24", rate:1}]
    // }
    const user = await getUserByName(username);
    let gallery = document.createElement('div')
    gallery.className = "gallery"
    for (let game of user.PlayedGame){
        let gameDiv = document.createElement('div')
        gameDiv.innerHTML = `
        <a>
           <img src="img/${game}.jpg" alt="Game Image">
        </a>
        <div class="desc">${game}</div>`

        gallery.appendChild(gameDiv);
    }

    userGameDiv.appendChild(gallery)
}

async function renderUserMessageBoard(username, userMessageDiv){
    // const user = {username: "user", password: "user", About: "Hello, I'm user.", Rate: 8,
    //     Language: "English", Level: "Gold", PlayStyle: "Aggressive", PlayTime: 10, ReportedTime: 1,
    //     PlayedGame: ["PUBG"], MessageReceived: [{"content":"Hello, I'm interesting to form team with you, please dm me if you are interested.",
    //         username:"user2", time:"2020/10/31"}], "CommentReceived": [{content: "Awesome Teammate!", username:"User2",
    //         time: "2020/11/01", rate:9}, {content: "Would never play with him again.", username:"User3",
    //         time: "2020/10/24", rate:1}]
    // }
    const user = await getUserByName(username);
    // const user = getUserByName(username);
    // console.log(user);
    for (let message of user.MessageReceived){
        let messageDiv = document.createElement('div');
        messageDiv.innerHTML = `
            <div class = "container" id = "message">
                <div class="card-body bg-light">
                    <p>${message.content} </p>
                    <strong>${message.username}</strong>
                    <span class="alignright messageDate"> ${message.time} </span>
                    <br>
                </div>
            </div>`
        userMessageDiv.appendChild(messageDiv)
    }
}

async function renderUserCommentBoard(username, userCommentDiv){
    const user = await getUserByName(username);
    // const user = {username: "user", password: "user", About: "Hello, I'm user.", Rate: 8,
    //     Language: "English", Level: "Gold", PlayStyle: "Aggressive", PlayTime: 10, ReportedTime: 1,
    //     PlayedGame: ["PUBG"], MessageReceived: [{"content":"Hello, I'm interesting to form team with you, please dm me if you are interested.",
    //         username:"user2", time:"2020/10/31"}], "CommentReceived": [{content: "Awesome Teammate!", username:"User2",
    //         time: "2020/11/01", rate:9}, {content: "Would never play with him again.", username:"User3",
    //         time: "2020/10/24", rate:1}]
    // }
    for (let comment of user.CommentReceived){
        let commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
            <div class="card commentCard">
                <div class= "card-horizontal">
                    <div class="image-square-wrapper">
                        <img src="img/${comment.username}.jpg" alt="User Profile Picture" class = "othersProfilePicture" id = 'commentUser'>
                    </div>
                    <div class = "card-body">
                        <div class = "commentUserInfo">
                            <strong>${comment.username}</strong> 
                            <span class="commentDate">${comment.time}</span>
                            <br>
                            <strong>Rate:</strong><span> <i class="fas fa-star"></i>${comment.rate}</span>
                        </div>
                        <hr>
                        <div>
                        <p class = "commentContent">${comment.content}</p>
                        <a href="#" class="btn btn-outline-secondary btn-sm reportComment" type = "button" onclick="report(${comment.username})">Report</a>
                        </div>
                    </div>
                </div>
            </div>`
        userCommentDiv.appendChild(commentDiv)
    }

}

async function getAllUsers() {
    // Get all user from server
    const url = `/users`
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

const getUserByName = async (name) => {
    let allUsers = await getAllUsers();
    allUsers = allUsers.users
    const target = allUsers.filter(user => user.username === name);
    //     .then((user) => {
    //         if (user.username === name) {
    //             return user
    //         }
    //     })
    //     .catch((error) => {
    //         res.status(500).send(error)
    //     })
    // console.log(target)
    // //


    if (target.length === 0) {
        return {};
    } else {
        return target[0];
    }

};

async function renderNavBar(username, NavBarDiv){
    let NavBar = document.createElement('div')
    NavBar.innerHTML = `
        <ul class="navbar-nav ml-auto" id = "navBar">
                <li class="nav-item">
                    <a href="../${username}" class="m-1 btn btn-outline-primary" >${username}</a>
                </li>
                <li class="nav-item">
                  <a href="../signup" class="m-1 btn btn-outline-primary" >Sign up</a>
                </li>
        </ul>
    `
    NavBarDiv.appendChild(NavBar)

}

async function renderOthersNavBar(username, NavBarDiv){
    let NavBar = document.createElement('div')
    NavBar.innerHTML = `
        <ul class="navbar-nav ml-auto" id = "navBar">
                <li class="nav-item">
                    <a href="../login" class="m-1 btn btn-outline-primary" >login</a>
                </li>
                <li class="nav-item">
                  <a href="../signup" class="m-1 btn btn-outline-primary" >Sign up</a>
                </li>
        </ul>
    `
    NavBarDiv.appendChild(NavBar)

}