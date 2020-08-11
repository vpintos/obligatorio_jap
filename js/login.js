function validate() {
    var x = document.forms["form"]["exampleInputEmail1"].value;
    if (x == "" || x == null) {
      alert("Debes ingresar un correo electrónico");
      return false;
    }
    var x = document.forms["form"]["exampleInputPassword1"].value;
    if (x == "" || x == null) {
      alert("Debes ingresar una contraseña");
      return false;
  
    }
    else{
    $("form").submit();
  }
}
  
  
  function soloNumeros() {
        myVar = [8, 9, 13, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 116 ]
        if(!(myVar.includes(event.keyCode))) {
          alert("Solo se admiten números");
          return false;
        }
  }
   


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});