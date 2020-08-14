var productsArray = [];

function showProducts(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let product = array[i];
        htmlContentToAppend += `
        <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name + `</h4>
                        <small class="text-danger">` + product.soldCount + ` artículos vendidos</small>
                    </div>
                    <p> `+ product.description + `</p>
                    <small class="alert-success">` + product.cost +' '+ product.currency + `</small>
                </div>
            </div>
        </div>
        </a>
        `

        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProducts(productsArray);
        }
    });
});