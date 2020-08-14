var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];

var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");
var password_numero = document.getElementById("password_numero");


email.addEventListener("input", email_Verify);
password.addEventListener("input", password_Verify);


let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validated() {
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
 


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});