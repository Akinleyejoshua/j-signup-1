var username = document.querySelector('#username');
var firstname = document.querySelector('#firstname');
var lastname = document.querySelector('#lastname');
var surnname = document.querySelector('#surnname');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var password2 = document.querySelector('#password2');
var submit = document.querySelector('button[name="submit"]');
var msg = document.querySelector('#msg');
var allInput = document.querySelectorAll('input');
var profilePicture = document.querySelector('#profile-pic');
var profileUpdate = document.querySelector('#DP');

// profile pic upload
profileUpdate.addEventListener('mouseout', function upleadPicture(){
    profilePicture.style.background = 'url(' + profileUpdate.value + ')';
})
// validator

function error() {
    msg.className = 'error';
    msg.style.padding = '1em';
}

function success() {
    msg.className = 'success';
    msg.style.padding = '1em';

}

function loading() {
    msg.className = 'loading';
    msg.style.padding = '1em';

}

function checkFormContent() {


    for (i = 0; 13 > i; i++) {
        if (allInput[i].value === "") {
            error();
            msg.innerHTML = 'All fields are required!';
        }
        else if (!isNaN(username.value) || !isNaN(email.value)) {
            error();
            msg.innerHTML = 'Username/Email must not include numbers!';
        }
        else if (password.value.length < 6) {
            error();
            msg.innerHTML = 'Aleast <b> 8 </b> characters! needed <br>';
            msg.innerHTML += 'Passord strength is too <b> weak </b>';
        }
        else if (username.value.length < 6) {
            error();
            msg.innerHTML = 'Username should contain atleast <b> 6 </b> characters!';
        }
        else if (password.value !== password2.value) {
            error();
            msg.innerHTML = 'Passwords do not match!';
        }
        else {
            success()
            msg.innerHTML = "<b>" + username.value + ", Signed UP in completely with <b>" + email.value + '</b>';

        }
    }
}


document.addEventListener('click', function validate(event) {

    if (event.target.innerHTML === 'Sign UP') {

        loading()
        msg.innerHTML = 'Initializing... Please hold on';
        setTimeout(checkFormContent, 5000);

    }
})
