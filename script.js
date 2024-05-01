//your JS code here. If required.
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let phone=document.getElementById("tel")
let email=document.getElementById("email");
function give(){
    alert(`First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phone.value} Email ID: ${email.value}`)
}
document.getElementById("submit").addEventListener("click",give);