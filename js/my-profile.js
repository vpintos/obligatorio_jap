
miStorage = window.localStorage;
function guardarDatos(){
    
    var datosUsuario = {
        "nombre": document.getElementById("printName").value,
        "apellido":  document.getElementById("printSurname").value,
        "edad": document.getElementById("printAge").value,
        "telefono": document.getElementById("printPhone").value,
        "email": document.getElementById("printEmailProfile").value,
        "usuario": document.getElementById("printUserProfile").value,
        "contraseña": document.getElementById("printPassProfile").value,

    }

    localStorage.setItem("keyData", JSON.stringify(datosUsuario));
    
    mostrarDatos();
}

function mostrarDatos(){
data = miStorage.getItem("keyData");

console.log(data);

console.log(JSON.parse(data));

const json = JSON.parse(data);

if (json !=null){
name = json.nombre;
surname = json.apellido;
age = json.edad;
phone = json.telefono;
email = json.email;
user = json.usuario;
pass = json.contraseña;




  document.getElementById("printName").setAttribute('value', name);
  document.getElementById("printSurname").setAttribute('value', surname);
  document.getElementById("printAge").setAttribute('value', age);
  document.getElementById("printPhone").setAttribute('value', phone);
  document.getElementById("printUserProfile").setAttribute('value', user);
  document.getElementById("printPassProfile").setAttribute('value', pass);
  document.getElementById("printPassProfile2").setAttribute('value', pass);
  document.getElementById("printEmailProfile").setAttribute('value', email);

  document.getElementById("profile-data").innerHTML  = `  <div class="card alert-success" role="alert">
  <p class="p-2"> Tus datos han sido guardados con éxito con éxito.</p>  </div><div class="row justify-content-end p-3">
  <button class= "btn btn-primary" onclick="location.href='index.html'" type="button"> Volver al inicio </button> </div>
 `;  
 
} else {
    mostrarLogin()
}


}

function mostrarLogin(){
user = miStorage.getItem("keyUser");
pass = miStorage.getItem("keyPassword");
email =  miStorage.getItem("keyEmail");

document.getElementById("printUserProfile").setAttribute('value', user);
document.getElementById("printPassProfile").setAttribute('value', pass);
document.getElementById("printPassProfile2").setAttribute('value', pass);
document.getElementById("printEmailProfile").setAttribute('value', email);
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ 

    mostrarDatos()

  user = miStorage.getItem("keyUser");
  pass = miStorage.getItem("keyPassword");
  email =  miStorage.getItem("keyEmail");

  document.getElementById("printUserProfile").setAttribute('value', user);
  document.getElementById("printPassProfile").setAttribute('value', pass);
  document.getElementById("printPassProfile2").setAttribute('value', pass);
  document.getElementById("printEmailProfile").setAttribute('value', email);


  });


