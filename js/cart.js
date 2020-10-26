var cart = {};

function  subTotalProducto(costo, numero, moneda) {
var cartCount = document.getElementById("numIngreso" + numero).value;
if (moneda == "UYU"){
    var subtotal = costo * cartCount/40; 
    document.getElementById("subtotalProd" + numero).innerHTML  = subtotal;
} else{
    var subtotal = costo * cartCount; 
  document.getElementById("subtotalProd" + numero).innerHTML  = subtotal;  
}
totalProductos();
calcularTotal();

}


function totalProductos(){
    var count = document.getElementsByName("sub"); 
    var total = 0; 
    for (let i = 0; i<count.length; i++){  
            var count2 = (count[i].innerHTML); 
            total += parseInt(count2); 
        }
    document.getElementById("totalProd").innerHTML  = total;
    document.getElementById("totalProd").value  = total;
}


function envioStandar(){
    if ( document.getElementById("standar").checked = true){
        var subtotalEnvio = document.getElementById("totalProd").value;
        var costoEnvio = Math.round(subtotalEnvio * 0.05);
        document.getElementById("costoEnvio").innerHTML  = costoEnvio;
        document.getElementById("costoEnvio").value  = costoEnvio;
    }
    calcularTotal();
 } 
 
 function envioExpress(){
    if ( document.getElementById("express").checked = true){
        var subtotalEnvio = document.getElementById("totalProd").value;
        var costoEnvio = Math.round(subtotalEnvio * 0.07);
        document.getElementById("costoEnvio").innerHTML  = costoEnvio;
        document.getElementById("costoEnvio").value  = costoEnvio;        
    }
    calcularTotal();
 } 

 function envioPremium(){
    if ( document.getElementById("premium").checked = true){
        var subtotalEnvio = document.getElementById("totalProd").value;
        var costoEnvio = subtotalEnvio * 0.15;
        document.getElementById("costoEnvio").innerHTML  = costoEnvio;
        document.getElementById("costoEnvio").value  = costoEnvio;
    }
    calcularTotal();
 } 

 function sinEnvio(){
    if ( document.getElementById("standar").checked == false && document.getElementById("express").checked == false && document.getElementById("premium").checked == false ){
        ;
        document.getElementById("costoEnvio").innerHTML  = 0;
        document.getElementById("costoEnvio").value  = 0;
    }

 } 


function showCart(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array["articles"].length; i++){
        let product = array["articles"][i];

        htmlContentToAppend += `
        <div class="card custom-card">
        <div class="list-group-item">
            <div class="row">
                <div class="col-2">
                <img src="` + product.src + `" alt="` + product.description + `" class="img-thumbnail" style="width: 100px;"></img>
                </div>
                <div class="col-6">
                    <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ product.name + `</h4>
                    </div>
                    <div>
                    <p> Cantidad: <input id="numIngreso` + i + `" type="number" class=" number caja countinput" min="1"  value="` + product.count + `" onchange="subTotalProducto( ` + product.unitCost + ` ,` + i + `, '` + product.currency + `' )" /> x $` + product.unitCost +''+ product.currency + `  </p>
                    </div> 
                </div>                                   
                    <div class="col-2 justify-content-end align-self-center">
                       <span class= "text-muted">Subtotal: </span> 
                    </div> 
                    <div class="justify-content-end align-self-center">
                    <h5 class="font-weight-bold font-size-small"> $ <span name="sub" id="subtotalProd` + i + `" > </span> <span> USD </span>  </h5> 
                 </div>  
                   
            </div>
        </div>   
        </div>          
              
        `
      }
      
        document.getElementById("cart-product").innerHTML = htmlContentToAppend;
    }


  
function calcularTotal(){
    var subtotal= document.getElementById("totalProd").value;
    var envio = document.getElementById("costoEnvio").value;
    if (envio == undefined) {
 total = "Selecciona un tipo de envío"
    }
    else{
    total = "$" + (subtotal + envio) + "USD"; 
}
    document.getElementById("total").innerHTML  = total;
}
$('button[type="button"]').on('click', function() {
    if (validateRadios())
      $('#myModal').modal();
  });

function validateRadios() {
    var arrayRadios = document.getElementsByName("envio");
    var isChecked = false;
    for (let i=0;i<arrayRadios.length;i++){
        if(arrayRadios[i].checked){
            isChecked = true;

        }
    }
    if(!isChecked) {
        document.getElementById("errorenvio").style.display = "block";
        return false;
    } else {
        document.getElementById("errorenvio").style.display = "none";
        return true;      
    }
}


var calle = document.forms["form"]["calle"];
var numero = document.forms["form"]["numero"];
var esquina = document.forms["form"]["esquina"];

var calle_error = document.getElementById("calle_error");
var numero_error = document.getElementById("numero_error");
var esquina_error = document.getElementById("esquina_error");

calle.addEventListener("input", calle_Verify);
numero.addEventListener("input", numero_Verify);
esquina.addEventListener("input", esquina_Verify);


function validated() {
  if (calle.value.length == 0) {
    calle.style.border = "1px solid red";
    calle_error.style.display = "block";
    calle.focus();
    return false; 
  }
  if (numero.value.length == 0) {
    numero.style.border = "1px solid red";
    numero_error.style.display = "block";
    numero.focus();
    return false; 
  }
  if (esquina.value.length == 0) {
    esquina.style.border = "1px solid red";
    esquina_error.style.display = "block";
    esquina.focus();
    return false; 
  }
}

function calle_Verify() { 
    if (calle.value.length >= 1) {
      calle.style.border = "1px solid silver";
      calle_error.style.display = "none";
      return true;
      }
  }

  function numero_Verify() { 
    if (numero.value.length >= 1) {
      numero.style.border = "1px solid silver";
      numero_error.style.display = "none";
      return true;
      }
  }
  
  function esquina_Verify() { 
    if (esquina.value.length >= 1) {
      esquina.style.border = "1px solid silver";
      esquina_error.style.display = "none";
      return true;
      }
  }
  
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL2).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cart = resultObj.data;
            
            //Muestro las categorías ordenadas
            showCart(cart) ;
            
            for(let i = 0; i < cart["articles"].length; i++){
                let product = cart["articles"][i];
            subTotalProducto(product.unitCost , i, product.currency) ; 
        }
    
        }
    });
});
