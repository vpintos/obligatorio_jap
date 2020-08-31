

var user = document.forms["form"]["user"];
var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];


var user_error = document.getElementById("user_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");
var password_numero = document.getElementById("password_numero");

user.addEventListener("input", user_Verify);
email.addEventListener("input", email_Verify);
password.addEventListener("input", password_Verify);

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validated() {
  if (user.value.length == 0) {
    user.style.border = "1px solid red";
    user_error.style.display = "block";
    user.focus();
    return false; 
  }
    if (email.value.length == 0 || !email.value.match(regExp)) {
      email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      return false; 
    }

    if (password.value.length == 0) {
      password.style.border = "1px solid red";
     password_error.style.display = "block";
      password.focus();
      return false;
  
    }
    if (password.value.length < 8) {
      password.style.border = "1px solid red";
     password_numero.style.display = "block";
      password.focus();
      return false;
    }
    
}

function user_Verify() { 
  if (user.value.length >= 1) {
    user.style.border = "1px solid silver";
    user_error.style.display = "none";
    return true;
    }
}

function email_Verify() {
 
  if (email.value.length >= 1 && email.value.match(regExp)) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
    }
}

function password_Verify() {
  if (password.value.length >= 8) {
    password.style.border = "1px solid silver";
   password_error.style.display = "none";
   password_numero.style.display = "none";
     return true;
  }
}
 
function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('g-signin2', {
    'scope': 'profile email',
    'max-width': 400,
    'height': 50,
    'align' : center.
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}


miStorage = window.sessionStorage; 
function printUserNav(){ 
  
  var printUser = document.forms["form"]["user"];
  sessionStorage.setItem("keyUser", printUser); 
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
 
});