const login_form = document.querySelector('#form-signin');

login_form.addEventListener('submit', Login_process);


function Login_process(e){
    e.preventDefault();
    //get the input
    const input_email = login_form.querySelector('#InputEmail1').value
    const input_pass = login_form.querySelector('#InputPassword1').value
    console.log(input_email,input_pass)

    // here would have a server call to get the json from api
    //in phase 1 i will just hard code here
    const userDB={
        "user1@user.com" : "user1",
        "user2@user.com" : "user2"
    }
    const adminDB={
        "admin@admin.com" : "admin"
    }

    //check if the input is in userDb
    if (userDB.hasOwnProperty(input_email))
    {
        //check if the password is correct
        if (input_pass == userDB[input_email] )
        {
            $('#invalid_alert').hide()
            //avaliable user turn to profile page
            window.location.href = "index.html";
        }
        else
        {

            $('#invalid_alert').hide()
            setTimeout(function(){$('#invalid_alert').show()} ,150)

        }
    }
    else if(adminDB.hasOwnProperty(input_email))
    {
        if (input_pass == adminDB[input_email] )
        {
            $('#invalid_alert').hide()
            //avaliable user turn to profile page
            window.location.href = "admin.html";
        }
        else
        {
            $('#invalid_alert').hide()
            setTimeout(function(){$('#invalid_alert').show()} ,150)
        }
    }
    else
    {
        $('#invalid_alert').hide()
        setTimeout(function(){$('#invalid_alert').show()} ,150)
    }
}