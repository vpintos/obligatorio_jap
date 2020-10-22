var cart = {};

function  subTotalProducto(costo, numero) {
var cartCount = document.getElementById("numIngreso" + numero).value;
var subtotal = costo * cartCount; 
document.getElementById("subtotalProd" + numero).innerHTML  = subtotal;

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
                <div class="col-7">
                    <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ product.name + `</h4>
                    </div>
                    <div>
                    <p> Cantidad: <input id="numIngreso` + i + `" type="number" class=" number caja countinput" min="1"  value="` + product.count + `" onchange="subTotalProducto( ` + product.unitCost + ` ,` + i + `)" /> x $` + product.unitCost +' '+ product.currency + `  </p>
                    </div> 
                </div>                                   
                    <div class="col-2 justify-content-end align-self-center">
                       <span class= "text-muted">Subtotal: </span> 
                    </div> 
                    <div class="justify-content-end align-self-center">
                    <p class="font-weight-bold"> $ <span id="subtotalProd` + i + `" > ` + product.count * product.unitCost + ` </p> 
                 </div>  
                   
            </div>
        </div>   
        </div>          
              
        `
      }
      
        document.getElementById("cart-product").innerHTML = htmlContentToAppend;
      

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
        }
    });
});
