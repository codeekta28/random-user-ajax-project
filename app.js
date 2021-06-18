console.log("This is app.js")
let generatePerson = document.querySelector("#btn");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let personLocation = document.querySelector("#street");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let photo = document.querySelector("#photo");

generatePerson.addEventListener("click",(e)=>{
console.log("button clicked");
let xhr = new XMLHttpRequest();
xhr.open("GET","https://randomuser.me/api/",true);
xhr.onprogress=function(){
    console.log("we are getting users for you")
}
xhr.onload=function(){
    let users = JSON.parse(this.responseText);
    let user = users.results[0];
    console.log(user.picture);
    firstName.innerHTML = `${user.name.first}`
    lastName.innerHTML = `${user.name.last}`
    phone.innerHTML = `${user.phone}`
    email.innerHTML = `${user.email}`
    photo.src = `${user.picture.large}`
    
}
xhr.send();
})