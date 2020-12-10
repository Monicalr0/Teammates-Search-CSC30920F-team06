"use strict"
// const User = require('models/user')
// import User from 'models/user';

async function renderUserProfile(username, userProfileDiv) {

    // const user = User.getUserByName(username);
    // console.log(user);

    let profileDiv = document.createElement('div');
    profileDiv.className="d-flex justify-content-center"
    profileDiv.innerHTML = `
    <div class="card bg-light ">
            <img src="img/user.jpg" alt="User Profile Picture", class = "userProfilePicture">
            <li class = "socialList">
            <!-- this will be link to user account page  -->
            <a href="https://www.facebook.com/" class= "fa fa-facebook inline"></a><strong> user</strong>
            <a href="https://twitter.com/home" class= "fa fa-twitter inline"></a> <strong> user</strong>
            </li>

            <form id = "updateForm" class="updateForm mx-auto">
            <input class="editInput" id='newAbout' type="text" placeholder="new About">
           <br>
           <input class="editInput" id='newLan' type="text" placeholder="new Language"><br>
           <input class="editInput" id='newPlayStyle' type="text" placeholder="new Playstyle">
            <input type="submit" value="Edit" class="btn-primary w-50">
            </form>
        </div>

        <div class="card">
  <div class="userInfoCard" id="userInfo">
           <p> 
            <strong>Username: </strong> <span> User</span>
           <br><br>
           <strong>About: </strong> <span> Hello, I'm user.</span>
           <br><br>
            <strong>Rate: </strong> <i class="fas fa-star"></i> 8
           <br><br>
           <strong>Language: </strong> <span> English </span>
            <br><br>
            <strong>Level:</strong> <span>Gold</span>
            <br><br>
            <strong>PlayStyle:</strong> <span>Agressive</span>
            <br><br>
            <strong>Reported Times: </strong> <span> 1  </span>
            <strong>Reported percetage: </strong> <span> 10%</span>
            <br><br>
            <strong>Played Game: </strong> 
            </p>
            <div class="gallery">
            <a>
               <img src="img/PUBG.jpg" alt="Game Image">
            </a>
            <div class="desc">PUBG</div>
            </div>
        </div>
    </div>
   </div>
    `;

    userProfileDiv.appendChild(profileDiv);


}

