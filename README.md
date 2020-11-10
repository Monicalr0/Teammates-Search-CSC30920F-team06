# team06

<strong>login credentials:<br>
</strong> we have 2 users here are the name/password user/user user2/user2 and 1 admin with its name/password is admin/admin
please note since we hard code all the data in the JS so register success won't up date the account to the database 
which you can only use user and user2 to login.
<br>
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
both pages are belongs to admin and only admin can access. after login using admin account user will be directed to admin user page. admin can switch between two pages using right corner [user]/[comment] button. In the admin_user page admin can see all the user here and admin can filter the user by its status. In the admin comments page admin can see all the comments and can see which one is reported then handle those reports. If the report is true(someone did violate rules), admin can use inactive button and inactive selection to ban user for a period of time(part of the ban action will be done in database).

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


