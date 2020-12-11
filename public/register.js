const sign_form = document.querySelector('#form-register');



sign_form.addEventListener('submit', register_process);

function register_process(e){
    e.preventDefault();
    //get the input
    const input_email = sign_form.querySelector('#inputUser3').value
    const input_pass = sign_form.querySelector('#inputPassword3').value
    const input_Address = sign_form.querySelector('#inputaddress3').value
    let input_check = $('#gridCheck1').is(':checked')

    console.log(input_email,input_pass,input_Address,input_check)

    // here would have a server call to get the json from api
    //in phase 1 i will just hard code here

    checked = true
    //first check if the check box is checked yet
    if (!input_check)
    {
        // warning

        $('#aggrement_alert').hide()
        setTimeout(function(){$('#aggrement_alert').show()} ,150)
        checked=false
    }
    else
    {
        $('#aggrement_alert').hide()

    }
    // if(userDB.hasOwnProperty(input_email)||adminDB.hasOwnProperty(input_email))
    // {
    //     $('#invalid_alert').hide()
    //     setTimeout(function(){$('#invalid_alert').show()} ,150)
    //     checked=false
    // }
    // else
    // {
    //     $('#invalid_alert').hide()
    // }
    if (input_email=="" || input_pass ==""|| input_Address=="")
    {
        // warning

        $('#empty_alert').hide()
        setTimeout(function(){$('#empty_alert').show()} ,150)
        checked=false
    }
    else
    {
        $('#empty_alert').hide()

    }
    if(checked)
    {
      //   //here we need to send information to the server but here we are using fake data
      //   //so we will just creat a json
      // const  user_pass={
      //       input_email: input_pass
      //   }
      // const  user_address={
      //     input_email: input_Address
      //   }
      //
      //   $('#success_alert').show()
      //   setTimeout(function(){window.location.href = "login.html"} ,2500)
        // the URL for the request
        const url = '/api/creatuser';

        // The data we are going to send in our request
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
                if (res.status === 200) {
                    // If student was added successfully, tell the user.
                    console.log('Added user')
                    $('#success_alert').show()
                    setTimeout(function(){window.location.href = "login.html"} ,2500)
                    //message.innerText = 'Success: Added a student.'
                    //message.setAttribute("style", "color: green")

                } else {
                    console.log('Added fail')
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

            console.log(error)
        })
    }
}
