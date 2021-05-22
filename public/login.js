const login_form = document.querySelector('#form-signin');

login_form.addEventListener('submit', Login_process);


function Login_process(e){
    e.preventDefault();
    //get the input
    const input_email = login_form.querySelector('#InputUser1').value
    const input_pass = login_form.querySelector('#InputPassword1').value
    console.log(input_email,input_pass)

    // here would have a server call to get the json from api
    //in phase 1 i will just hard code here
    // const userDB={
    //     "user" : "user",
    //     "user2" : "user2"
    // }
    // const adminDB={
    //     "admin" : "admin"
    // }

    const url = '/users/login';

    let data = {
        username: input_email,
        password: input_pass
    }
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
        },
    });

    // Send the request with fetch()
    fetch(request)
        .then(function(res) {

            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            //const message = document.querySelector('#message')
            console.log(res.status)
            if (res.status === 200) {
                // If student was added successfully, tell the user.

                $('#success_alert').show()
                //window.location.href = "index";
                setTimeout(function(){window.location.href = "indexLoggedIn.html"} ,2500)
                //message.innerText = 'Success: Added a student.'
                //message.setAttribute("style", "color: green")

            } else {
                //console.log('Added fail')
                console.log(res.status)
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                //message.innerText = 'Could not add student'
                //message.setAttribute("style", "color: red")
                if(res.status==404)
                {
                    $('#invalid_alert').hide()
                    setTimeout(function(){$('#invalid_alert').show()} ,150)
                    checked=false
                }
                else
                {
                    $('#invalid_alert').hide()
                }

            }
            console.log(res)  // log the result in the console for development purposes,
            //  users are not expected to see this.
        }).catch((error) => {

        //console.log(error)
    })

}

//
//     //check if the input is in userDb
//     if (userDB.hasOwnProperty(input_email))
//     {
//         //check if the password is correct
//         if (input_pass == userDB[input_email] )
//         {
//             $('#invalid_alert').hide()
//             //avaliable user turn to profile page
//             window.location.href = "indexLoggedIn.html";
//         }
//         else
//         {
//
//             $('#invalid_alert').hide()
//             setTimeout(function(){$('#invalid_alert').show()} ,150)
//
//         }
//     }
//     else if(adminDB.hasOwnProperty(input_email))
//     {
//         if (input_pass == adminDB[input_email] )
//         {
//             $('#invalid_alert').hide()
//             //avaliable user turn to profile page
//             window.location.href = "admin.html";
//         }
//         else
//         {
//             $('#invalid_alert').hide()
//             setTimeout(function(){$('#invalid_alert').show()} ,150)
//         }
//     }
//     else
//     {
//         $('#invalid_alert').hide()
//         setTimeout(function(){$('#invalid_alert').show()} ,150)
//     }

