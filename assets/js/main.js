console.log("Ok radi");
let urlPath = document.location.pathname;

// Nav more shadow appending on scroll
window.onscroll = () => {
    let getNavBar = document.getElementById("nav");
    if (document.documentElement.scrollTop > 80) {
        getNavBar.classList.add("pad-15-0", "more-shadow-on");
    } 
    else {
        getNavBar.classList.remove("pad-15-0", "more-shadow-on");
    }
}
// window.onload = function(){
//         let urlPath = document.location.pathname;
    
//         if(urlPath == "/" || urlPath == "/index.html"){
//             writeCategories(getCategoryTS, 1, categoriesArr, 2);
//             writeCategories(getCategoryBS, 2, categoriesArr, 2);
//             writeProducts(getNewProductsBlock, 8, newProductsArr);
//             writeProducts(getBestSellerBlock, 8, bestSellerArr);
//         }
    
//         if(urlPath == "/products.html"){
//             writeProducts(getAllProductsBlock, productsArr.length, productsArr);
//         }
//     }

// Slider

let assetPath = "assets/img/";
let imageArr = ["img_1.jpg", "img_2.jpg", "img_3.jpg"];
let imageIndex = 0;
let imageArrLimit = imageArr.length - 1;
function loadSlideshow(){
    let getCarouselBlockImage = document.getElementById("carousel-block-image");
    let getCarouselBlockTitle = document.getElementById("carousel-block-title");
    
    getCarouselBlockImage.src = `${assetPath}${imageArr[imageIndex]}`;
    getCarouselBlockImage.alt = `alt-${imageArr[imageIndex]}`;
    getCarouselBlockTitle.innerHTML = `Product ${imageIndex + 1}: ${imageArr[imageIndex]}`;
    if(imageIndex >= imageArrLimit){
        imageIndex = 0;
    }
    else{
        imageIndex++;
    }
    setTimeout(loadSlideshow, 2000);
}
// loadSlideshow();


// Categories dynamic writing
let getCategoryTS = document.querySelector('#product-cat-block-ts');
let getCategoryBS = document.querySelector('#product-cat-block-bs');
function writeCategories(location, part, arr, layoutType){
    // case 1: default category layout, case 2: custom category layout/home page category layout
    let dynamicCategories = "";

    switch (layoutType) {
        case 1:
                for (let i = 0; i < arr.length; i++) {
                    
                }
            break;
        case 2:
                // First or second half layout, part 1 or part 2
                let arrStart, arrMid, arrEnd;
                arrEnd = arr.length; 
                arrStart = 0;
                if(arr.length % 2 == 0){
                    arrMid = (arr.length / 2);
                }
                else arrMid = Math.floor(arr.length / 2);

                switch (part) {
                    case 1:
                        dynamicCategories += `<div class="d-flex">`;
                        for(let i = arrStart; i < arrMid; i++){
                            if(i == arrMid - 1){
                                dynamicCategories += `</div> 
                                                      <div id="id${arr[i].cName}" class="cat-image d-flex flex-column justify-content-between block-long shadow-on border-15 border-gray orange-hover">
                                                        <h5 class="text-center">${arr[i].cName}</h5>
                                                        <img src="${arr[i].cImage}" alt="${arr[i].cName}.svg"/>
                                                        <button class="open-cat-btn text-capitalize border-15">view more</button>
                                                      </div>`;
                            }
                            else{
                                dynamicCategories += `<div id="id${arr[i].cName}" class="cat-image d-flex flex-column justify-content-between cat-block shadow-on border-15 border-gray orange-hover">
                                                        <h5 class="text-center">${arr[i].cName}</h5>
                                                        <img src="${arr[i].cImage}" alt="${arr[i].cName}.svg"/>
                                                        <button class="open-cat-btn text-capitalize border-15">view more</button>
                                                      </div>`;
                            }
                        }
                        break;
                    case 2:
                        for(let i = arrMid; i < arrEnd; i++){
                            if(i <= arrMid){
                                dynamicCategories += `<div id="id${arr[i].cName}" class="cat-image d-flex flex-column justify-content-between block-long shadow-on border-15 border-gray orange-hover">
                                                        <h5 class="text-center">${arr[i].cName}</h5>
                                                        <img src="${arr[i].cImage}" alt="${arr[i].cName}.svg"/>
                                                        <button class="open-cat-btn text-capitalize border-15">view more</button>
                                                      </div>
                                                      <div class="d-flex">`;

                            }
                            else{
                                dynamicCategories += `<div id="id${arr[i].cName}" class="cat-image d-flex flex-column justify-content-between cat-block shadow-on border-15 border-gray orange-hover">
                                                        <h5 class="text-center">${arr[i].cName}</h5>
                                                        <img src="${arr[i].cImage}" alt="${arr[i].cName}.svg"/>
                                                        <button class="open-cat-btn text-capitalize border-15">view more</button>
                                                      </div>`;
                            }
                        }
                        dynamicCategories += `</div>`;
                        break;
                    default:
                        break;
                }
            break;
        default:
            console.log("Error: Check inserted parameters.");
            break;
    }
    
    location.innerHTML = dynamicCategories;
}
if(urlPath == "/index.html" || urlPath == "/") writeCategories(getCategoryTS, 1, categoriesArr, 2);
if(urlPath == "/index.html" || urlPath == "/") writeCategories(getCategoryBS, 2, categoriesArr, 2);


// Products dynamic writing
let getNewProductsBlock = document.querySelector('#new-products-block .product-container');
let getBestSellerBlock = document.querySelector('#best-seller-block .product-container');
let getAllProductsBlock = document.querySelector('#all-products .product-container');
function writeProducts(location, rep, arr){
    let dynamicProducts = "";
    for(let i = 0; i < rep; i++){
        dynamicProducts += `<div class="product-block shadow-on border-15 border-gray orange-hover">
                                <h5 class="text-center">${arr[i].pName}</h5>
                                <img src="${arr[i].pImage}" alt="${arr[i].pName}"/>
                                <div class="d-flex justify-content-between">
                                    <h5 class="border-10"><span class="hide">Price:</span> ${arr[i].pPrice}&dollar;</h5>
                                    <button class="open-product-btn text-capitalize border-10" value="${arr[i].pId}">View more</button>
                                </div>
                            </div>`;
    }

    location.innerHTML = dynamicProducts;
}
if(urlPath == "/index.html" || urlPath == "/") writeProducts(getNewProductsBlock, 8, newProductsArr);
if(urlPath == "/index.html" || urlPath == "/") writeProducts(getBestSellerBlock, 8, bestSellerArr);
if(urlPath == "/products.html") writeProducts(getAllProductsBlock, productsArr.length, productsArr);


// Getting product details on button click
let getOpenProductBtn = document.querySelectorAll('.open-product-btn');
let getModal = document.querySelector('#modal');
let getOverlay = document.querySelector('#overlay');
let getModalImage = document.querySelector('#modal-image');
let getModalProductQuant = document.querySelector('#m-quant');


// Successfully added to cart
let getAddToCartBtn = document.querySelector('#add-to-cart-btn');
getAddToCartBtn.addEventListener('click', () => {
    getAddToCartBtn.innerHTML = "Successfully added to cart!";
    setTimeout(() => {
        getAddToCartBtn.innerHTML = "Add to cart";
    }, 1500);
})
// $("#add-to-cart-btn").click(() => {
//     $("#add-to-cart-btn p").html("Successfuly added to cart!").fadeIn('slow');
// });
let selectedOpenProductBtn = getOpenProductBtn.forEach((el) => {
    el.addEventListener('click', () => {
        let getModalProductName = document.querySelector('#modal-product-name');
        let getModalProducInformation = document.querySelector('#modal-product-information');
        let getModalProductPrice = document.querySelector('#product-price');
        let getModalProductTotalPrice = document.querySelector('#modal-price #product-total-price');
        
        let index = el.value - 1;

        // Dynamic information from selected product
        getOverlay.classList.add('overlay-active');
        getModal.classList.remove('hide');
        getModalProductName.innerHTML = `${productsArr[index].pName}`;
        getModalProducInformation.innerHTML = `${productsArr[index].pDesc}`;
        getModalProductPrice.innerHTML = `${productsArr[index].pPrice}&dollar;`;
        getModalProductTotalPrice.innerHTML = `${productsArr[index].pPrice}&dollar;`;
        $('#modal-image').css('background-image', `url('${productsArr[index].pImage}')`);

        // Calculating total price with event
        let quantityChange = getModalProductQuant.addEventListener('change', () => {
            let quantVal = parseFloat(getModalProductQuant.value);
            let totalPriceString = String(productsArr[index].pPrice * quantVal);
            let dotIndex =  totalPriceString.indexOf('.');
            let totalPriceResult =  totalPriceString.substring(0, dotIndex) + totalPriceString.substring(dotIndex, dotIndex + 3);

            getModalProductTotalPrice.innerHTML = `${totalPriceResult}&dollar;`;
        });
    })
});
// Na escape dugme ugasiti modal
let exitOnEscapeKey = document.addEventListener('keydown', (el) => {
    if(el.key == 'Escape') {
        getModal.classList.add('hide');
        getOverlay.classList.remove('overlay-active');
        getModalProductQuant.value = 1;
    }
});
document.querySelector('#modal #close-btn').addEventListener('click', () => {
    getModal.classList.add('hide');
    getOverlay.classList.remove('overlay-active');
    getModalProductQuant.value = 1;
});























// jQuery
let con = $('.separator');
// console.log(con)

// Testiranje sa objektima
// console.log(productsArr[0].pPrice);
var priceLimit = 3.00;
for (let i in productsArr) {
    if(productsArr[i].pPrice >= priceLimit){
        // console.log(`Name: ${productsArr[i].pName}, Price: ${productsArr[i].pPrice}`);
    }
}
console.log("*******************************************");
console.log("");
console.log("");

let sortedPriceDesc = [];
for (let i in productsArr) { 
    sortedPriceDesc.push(productsArr[i].pPrice); 
}

let array2 = [10, 5, 2, 22, 398, 1];
let result = array2.sort((a,b) => a - b);
// console.log(result);

let result2 = sortedPriceDesc.sort((a,b) => b - a);
// console.log(result2);