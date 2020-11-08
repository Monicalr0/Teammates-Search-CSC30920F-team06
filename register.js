const sign_form = document.querySelector('#form-register');



sign_form.addEventListener('submit', register_process);

function register_process(e){
    e.preventDefault();
    //get the input
    const input_email = sign_form.querySelector('#inputEmail3').value
    const input_pass = sign_form.querySelector('#inputPassword3').value
    const input_Address = sign_form.querySelector('#inputaddress3').value
    let input_check = $('#gridCheck1').is(':checked')

    console.log(input_email,input_pass,input_Address,input_check)

    // here would have a server call to get the json from api
    //in phase 1 i will just hard code here
    const userDB={
        "user1@zzz.com" : "123123",
        "user2@zzz.com" : "1212"
    }
    const adminDB={
        "user3@zzz.com" : "1212"
    }
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
    if(userDB.hasOwnProperty(input_email)||adminDB.hasOwnProperty(input_email))
    {
        $('#invalid_alert').hide()
        setTimeout(function(){$('#invalid_alert').show()} ,150)
        checked=false
    }
    else
    {
        $('#invalid_alert').hide()
    }
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
        //here we need to send information to the server but here we are using fake data
        //so we will just creat a json
        window.location.href = "login.html";
    }
}