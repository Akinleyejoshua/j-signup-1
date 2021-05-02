// This is a program validates form
var submit = document.getElementById('submit');
submit.addEventListener('click',validate)
function validate() {
var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var msg = document.querySelector('#msg');


if( email ==='' || username === '' || password === '' ){
	alert('All fields are required')
	}
else if (8 > password.length){
	alert("Minumun of 8 characters required")
	}
else{ alert(`${email} as been registered with ${username}`); 
	}
}

