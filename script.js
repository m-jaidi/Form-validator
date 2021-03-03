
let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let error_msg_username = document.getElementById("error_msg_username");
let error_msg_password = document.getElementById("error_msg_password");
let error_msg_email = document.getElementById("error_msg_email");
let error_msg_password2 = document.getElementById("error_msg_password2");



var i = /[a-zA-Z0-9]{3}/;

var j = /[a-zA-Z0-9]+@+[a-zA-Z]+[.]+[a-zA-Z]/;


/* function change_color_red(input)
{
    return input.style.borderColor="red";
    
}
function change_color_green(input)
{
    return input.style.borderColor="green";
}
 */

form.addEventListener("submit", function (e) {
    e.preventDefault(e);

    //Vérification username

    if (username.value === '') {
        
       username.style.borderColor = "red";
       
    } else {
        if (username.value.length >= 3 && username.value.length <= 15) {
            username.style.borderColor = "green";

            error_msg_username.style.visibility = "hidden";

        } else {
            username.style.borderColor = "red";
            error_msg_username.style.visibility = "visible";
            error_msg_username.style.color = 'red';
        }
    }

    //Vérification Email

    if (!j.exec(email.value)) {
        email.style.borderColor = "red";
        error_msg_email.style.visibility = "visible";
    }
    else {
        email.style.borderColor = "green";
        error_msg_email.style.visibility = "hidden";
    }


    //Vérification Password

    if (password.value === '') {
        password.style.borderColor = "red";
        error_msg_password.style.visibility = "visible";
    }
    if (password2.value === '') {
        password2.style.borderColor = "red";
        error_msg_password2.style.visibility = "visible";

    }
    if (password.value != password2.value) {
        password.style.borderColor = "red";
        password2.style.borderColor = "red";
        error_msg_password2.style.visibility = "visible";
    }

    if (password.value.length <= 5) {
        password.style.borderColor = "red";
        error_msg_password.style.visibility = "visible";
    }

    if (password2.value.length <= 5) {
        password2.style.borderColor = "red";
        error_msg_password2.style.visibility = "visible";
    }

    else if (password.value === password2.value && password.value.length >= 5 && password2.value.length >= 5) {
        password.style.borderColor = "green";
        password2.style.borderColor = "green";
        error_msg_password2.style.visibility = "hidden";
        error_msg_password.style.visibility = "hidden";
    }
    else {
        password.style.borderColor = "red";
        password2.style.borderColor = "red";
        error_msg_password.style.visibility = "visible";
    }
 
});











