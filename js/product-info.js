var product = [];
var comments = [];
var related = [];



function showImagesGallery1(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < 1; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
    
        <img class="d-block w-100" src="` + imageSrc + `" >
    `

    document.getElementById("productImagesGallery1").innerHTML = htmlContentToAppend;
       
        
    }
}

function showImagesGallery2(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="carousel-item">
        <img class="d-block w-100" src="` + imageSrc + `" >
      </div>
    
    `

    document.getElementById("productImagesGallery2").innerHTML = htmlContentToAppend;
       
        
    }
}

function showRelatedProducts(array) {

    let htmlContentToAppend = "";

    for (let e = 0; e < array.length; e++) {

    for (let i = 0; i < relatedProductsArray.length; i++) {
        if (e === relatedProductsArray[i]){
        let related = array[e];
    
            htmlContentToAppend += `
        
                    <a href="product-info.html" class="card shadow-sm custom-card col-lg-3 col-md-4 col-6  mb-3">
                    
                        <div class="d-block mb-4 h-100">
                            <div class="flex">
                            <img src="` + related.imgSrc + `" alt="` + related.description + `" class="img-fluid img-thumbnail">
                                <h4 class="mb-1">`+ related.name + `</h4>
                            </div>
                            <p> `+ related.description + `</p>
                            <small class="alert-success">` + related.cost +' '+ related.currency + `</small>
                        </div>
                    </div>
            
                    <a>
                `
            }
                document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
         }
    }
} 
    

function showProductComments(array) {
   
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let comments = array[i];
    if (comments.score == 3){
        htmlContentToAppend+=    `
        <div class="card bg-light mb-3">
        <div class="card-header"> 
            <p style="float:left"> Calificación: <strong class= "text-success" > ` + comments.score + ` /5 </strong> </p> <div id="starRating"></div>
            <div id="score" value= " ` + comments.score + `"></div>
           <div style="float: right"> 
           <span class="fa fa-star checked" style="font-size:24px"></span>
            <span class="fa fa-star checked" style="font-size:24px"></span>
            <span class="fa fa-star checked" style="font-size:24px"></span>
            <span class="fa fa-star " style="font-size:24px"></span>
            <span class="fa fa-star " style="font-size:24px"></span>
            </div>
        </div>
        <div class="card-body">
           <strong class="card-title text-primary " > ` + comments.user + `</strong>
           <p class="text-muted">` + comments.dateTime + `</p>
           <p class="card-text">` + comments.description + `.</p>
        </div>
        <br>
    </div>        
`
document.getElementById("productComment").innerHTML = htmlContentToAppend; 
    }
    if (comments.score == 4){
        htmlContentToAppend+=    `
        <div class="card bg-light mb-3">
        <div class="card-header"> 
            <p style="float:left"> Calificación: <strong class= "text-success" > ` + comments.score + ` /5 </strong> </p> <div id="starRating"></div>
            <div style="float: right"> 
           <span class="fa fa-star checked" style="font-size:24px"></span>
            <span class="fa fa-star checked" style="font-size:24px"></span>
            <span class="fa fa-star checked" style="font-size:24px"></span>
            <span class="fa fa-star checked " style="font-size:24px"></span>
            <span class="fa fa-star " style="font-size:24px"></span>
            </div>
        </div>
        <div class="card-body">
           <strong class="card-title text-primary " > ` + comments.user + `</strong>
           <p class="text-muted">` + comments.dateTime + `</p>
           <p class="card-text">` + comments.description + `.</p>
        </div>
        <br>
    </div>        
`
document.getElementById("productComment").innerHTML = htmlContentToAppend; 
}
if (comments.score == 5){
    htmlContentToAppend+=    `
    <div class="card bg-light mb-3">
    <div class="card-header"> 
        <p style="float:left"> Calificación: <strong class= "text-success" > ` + comments.score + ` /5 </strong> </p> <div id="starRating"></div>
        <div style="float: right"> 
       <span class="fa fa-star checked" style="font-size:24px"></span>
        <span class="fa fa-star checked" style="font-size:24px"></span>
        <span class="fa fa-star checked" style="font-size:24px"></span>
        <span class="fa fa-star checked " style="font-size:24px"></span>
        <span class="fa fa-star checked " style="font-size:24px"></span>
        </div>
    </div>
    <div class="card-body">
       <strong class="card-title text-primary " > ` + comments.user + `</strong>
       <p class="text-muted">` + comments.dateTime + `</p>
       <p class="card-text">` + comments.description + `.</p>
    </div>
    <br>
</div>        
`
document.getElementById("productComment").innerHTML = htmlContentToAppend; 
}
}
}


function validated() {
var comment = document.forms["form"]["comment"];
var star1 = document.getElementById("star1").checked ;
var star2 = document.getElementById("star2").checked ;
var star3 = document.getElementById("star3").checked ;
var star4 = document.getElementById("star4").checked ;
var star5 = document.getElementById("star5").checked ;
var comment_error = document.getElementById("comment_error");
if (comment.value.length == 0) {
    comment.style.border = "1px solid red";
    comment_error.style.display = "block";
    comment.focus();
    return false; 
  }
if (star1 == false && star2 == false && star3 == false && star4 == false && star5 == false){
    comment_error.style.display = "block";
   
    return false;    
}
}

//intento de mostrar el comentario pero nunca funcionó
/*
miStorage2 = window.sessionStorage;
function guardarComment(){
    
        var comentarioN = {
        
        "comentario": document.getElementById("comment").value,
        "rating": document.querySelector('input[name="rating"]:checked').value,
    }

    sessionStorage.setItem("keyComment", JSON.stringify(comentarioN));
    mostrarComment();
}



function mostrarComment(){
    data = miStorage2.getItem("keyComment");
   
    console.log(data);
    
    console.log(JSON.parse(data));
    
    const json = JSON.parse(data);
    
    rate = json.rating;  
    comment= json.comentario;
    if (json.rating == 5){
       
    document.getElementById("productCommentNew").innerHTML = miStorage2.getItem("keyComment"); 
     
    }
}
*/

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
      getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            product = resultObj.data;
            
            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
            let productCostHTML = document.getElementById("productCost");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;
            productCostHTML.innerHTML= product.cost + product.currency;
            relatedProductsArray = product.relatedProducts;
            
            //Muestro las categorías ordenadas
            showImagesGallery1(product.images);
            showImagesGallery2(product.images);

        } 
    });
   
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            related = resultObj.data;
            
            //Muestro las categorías ordenadas
            showRelatedProducts(related) ;
        }
    });  
   getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            comments = resultObj.data;
            
            //Muestro las categorías ordenadas
            showProductComments(comments);
            
        }
    });
});


