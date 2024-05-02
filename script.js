//your JS code here. If required.
let fname = document.getElementsByName("First Name")[0];
let lname = document.getElementsByName("Last Name")[0];
let phone = document.getElementsByName("Phone Number")[0];
let email = document.getElementsByName("Email ID")[0];

function give() {
	
    alert(`First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phone.value} Email ID: ${email.value}`)
}

//document.getElementById("submit").addEventListener("click", give);