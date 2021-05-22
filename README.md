# TeammateSearch
This is a team project for CSC309 at UofT, the web development. This is the original version of the final result of our team, with some small issue on the heroku part which will be fixed later. (This version is a mirrored version as the original version are set to be private). 

## Original Readme, credit to my teammate. 
<strong>WebApp name: Teammates search</strong><br> 
<h2><strong>Deployed website:</strong></h2><br>
https://salty-scrubland-97536.herokuapp.com/
<h2><strong>How to use:</strong></h2>
The user could use this webapp to search for teammates when they want to play a Multiplayer Online Battle Arena Video Games such as LOL.
After signed up an account and logged in, user could use index page to search for teammates. User could use sidebar to get a more specific search result, such as choose different level, rating and playstyle as they want.<br>
And in profile page, user could view other users' profile.We set up a schema for users which contains some basic userinfo such as language prefer, level and greeting message. And communicate with others by sending message. Or, if they have some unpleasant experience, they could report this user.<br>
<h2><strong>Routes</strong></h2>


 <br>
 all routes are in the servers.js and they can be put into three type of routes, 
 first are the static and navigation route which response for control what can user see and how to link each page toughter, they do not expect any input.
 second are session control route which in the address of /users/login which allow use send json file and check with the database inorder to creat login function. this route will retuen a status code and reject or not. /api/creatadmin can creat admin and /api/creatuser will create user both them recive jsonfile 
 third routes are database related, thouse routes recive json file and put them into database, it also involve hash password into a random string that keep user's data safe
 <br>

<h2><strong>page info:</strong></h2>
      <br>                 
<strong> signin.html and register.html:</strong>
<br>
this is the start page of our website, user can login using their user name and password, if either is wrong the alert message will display. if login success it will jump to either admin page or indexLoggedIn.html(aka the lounge) depends on what is you account access level. if user do not have account they can click the "register here" link to jump to the register page.<br> register page will creat a new account by using the input value. if the user name is exist or any input box is not empty or didn't check the box, an alert will pop up and remind user wich part is wrong. is register is success, a green alert will show up and after few seconds to will direct back to the login page.

 <br>        <br>             
<strong> indexLoggedIn.html and index.html:</strong>
this two page are index page of the website, users will use this page to search the people they wanna play with. the different between these two pages are one is loggined and can go to user profile page by clicking userr button and the unloggedin version can sign up or login. Users can search up keywords to find the users they want to collaborate with. They can also filter the results by level, rating and playstyle. When they click "detail" on a searching result, they will be redirected to that user's profile page.
<br>             <br>         
<strong> profile.html / profile_others.html :</strong>
<br>
This is the user profile page under that user's view and the user profile page under other users (here we assume someone hasn't loged in) view. Any users can leave message
at message board. The user of this profile can edit the profile's About, Language and playstyles preference. User who had played with user can  comment this user by clicking the "comment" button and being redirected to Make Comment page. Any user can report comment can report comment at user's profile page, and a prompt message will be shown as reported success. 

<br>               
<strong> admin_user.html and admin_comment.html:</strong>
<br>
both pages are belongs to admin and only admin can access. after login using admin account user will be directed to admin user page. admin can switch between two pages using right corner [user]/[comment] button. In the admin_user page admin can see all the user here and admin can filtering the user by its status.


<br>               
<strong> commentPage.html and CommentSucceed.html:</strong>
<br>
commentPage can be accessed from user's profile, and give this player a comment or report(need to specify report reasons such as AFK or deffensive words) depends which one the user wants. 
1. user can also add picture using the upload button
2. User can give Star rates, max 5 Star.
3. Entering detail comment in the comment box and use the submit button to submit. 
after the comment successful submit it will turns to the CommentSucceed.html where it shows comment success and return to index by return link.
<br>

<br>
<h2><strong>third-party libraries:</strong></h2>

<br>
<br>
this website uses library: bootstrap jQuery popper


