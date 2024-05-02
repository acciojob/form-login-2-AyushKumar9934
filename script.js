//your JS code here. If required.
let fname = document.getElementsByName("fname")[0];
let lname = document.getElementsByName("lname")[0];
let phone = document.getElementsByName("tel")[0];
let email = document.getElementsByName("email")[0];

function give() {
    alert(`First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phone.value} Email ID: ${email.value}`)
}

document.getElementById("submit").addEventListener("click", give);