var email = document.forms["form"]["email"].value;
var password = document.forms["form"]["password"].value;

var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");


function validate() {
    if (email == "" || email.value == null) {
      email.style.border = "1px solid red";
      email.focus();
      return false;
    }

    if (x == "" || x == null) {
      alert("Debes ingresar una contraseña");
      return false;
  
    }

}
  
 


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});