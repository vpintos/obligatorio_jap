

function guardarDatos(){

    var datosUsuario = {
        "nombre": document.getElementById("printName").value,
        "apellido":  document.getElementById("printSurname").value,
        "edad": document.getElementById("printAge").value,
        "telefono": document.getElementById("printPhone").value,
    }

    miStorage.setItem("keyData", JSON.stringify(datosUsuario));
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ 


  user = miStorage.getItem("keyUser");
  pass = miStorage.getItem("keyPassword");
  email =  miStorage.getItem("keyEmail");
  
  document.getElementById("printName").setAttribute('value', name);
  document.getElementById("printSurname").setAttribute('value', surname);
  document.getElementById("printAge").setAttribute('value', age);
  document.getElementById("printPhone").setAttribute('value', phone);




  document.getElementById("printUserProfile").setAttribute('value', user);
  document.getElementById("printPassProfile").setAttribute('value', pass);
  document.getElementById("printPassProfile2").setAttribute('value', pass);
  document.getElementById("printEmailProfile").setAttribute('value', email);


  });


