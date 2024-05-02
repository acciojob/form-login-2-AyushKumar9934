//your JS code here. If required.
let fname = document.getElementsByName("firstName")[0];
let lname = document.getElementsByName("lastName")[0];
let phone = document.getElementsByName("phoneNumber")[0];
let email = document.getElementsByName("emailId")[0];

function give() {
    alert(`First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phone.value} Email ID: ${email.value}`)
}

document.getElementById("submit").addEventListener("click", give);