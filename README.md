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
<strong> profile.html:</strong>
<br>
this is the user profile page, user can send massage to this person and also post comment to this person by using the left coner's message box. user can also filter the comment for this person by using the filter on the lower right coner. user itself can send report on certern comment by using the report button. user it self can also edit it own information.

<br>               
<strong> admin.html:</strong>
<br>
after admin login they will be directed to this page and in this page you can see a list of user and their status, admin can user filtering or searching function to filter certern user and to decied how to process by using inactive button. 
