var product = [];
var comments = [];
var related = [];

var coment = document.forms["form"]["comment"];

var comment_error = document.getElementById("comment_error");

function validated() {
if (comment.value.length == 0) {
    comment.style.border = "1px solid red";
    comment_error.style.display = "block";
    comment.focus();
    return false; 
  }
}

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


    

function showProductComments(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let comments = array[i];

            htmlContentToAppend += `
        <div class="card bg-light mb-3">
            <div class="card-header"> 
                <p style="float:left"> Calificación: <strong class= "text-success" > ` + comments.score + ` /5 </strong> </p> 
                <fieldset class="rating2">
                    <input id="star5" name="rating" value="5" />
                    <label class = "full" for="star5" title="Excelente- 5 stars"></label>
                    <input id="star4" name="rating" value="4" />
                    <label class = "full" for="star4" title="Muy bueno - 4 stars"></label>
                    <input id="star3" name="rating" value="3" />
                    <label class = "full" for="star3" title="Bueno - 3 stars"></label>
                    <input id="star2" name="rating" value="2" />
                    <label class = "full" for="star2" title="Malo - 2 stars"></label>
                    <input id="star1" name="rating" value="1" />
                    <label class = "full" for="star1" title="Muy malo - 1 star"></label>
                </fieldset>
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
    // --lo intente- no salió --  // $(".rating2 > input[value="+comments.score+"]").prop("checked", true);
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
});


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            comments = resultObj.data;
            
            //Muestro las categorías ordenadas
            showProductComments(comments);
        }
    });
});


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            related = resultObj.data;
            
            //Muestro las categorías ordenadas
            showRelatedProducts(related) ;
        }
    });
});
