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

// Logo change on hover
$('.link-logo').hover(
    function() {
        // console.log('hover on');
        $('.link-logo img').attr('src', 'assets/img/SVG/logo-open.svg');
    }, 
    function() {
        $('.link-logo img').attr('src', 'assets/img/SVG/logo-closed.svg');
        // console.log("hover off");
    }
);

// Categories dynamic writing
let getCategoryTS = document.querySelector('#product-cat-block-ts');
let getCategoryBS = document.querySelector('#product-cat-block-bs');
let getCategoryPicker = document.querySelector('#category-picker');
function writeCategories(location, arr, layoutType, part){
    // case 1: default category layout, case 2: custom category layout/home page category layout
    let dynamicCategories = "";

    switch (layoutType) {
        case 1:
                for (var i = 0; i < arr.length; i++) {
                    dynamicCategories += `<div class="d-flex justify-content-between"><label for="cat${arr[i].cName}">${arr[i].cName}</label>
                                          <input type="checkbox" name="cat${arr[i].cName}" id="cat${arr[i].cName}" value="${i+1}"/></div>`;
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
                                                        <button class="my-btn open-prod-page open-cat-btn btn-hover text-capitalize border-15" value="${i+1}">view more</button>
                                                      </div>`;
                            }
                            else{
                                dynamicCategories += `<div id="id${arr[i].cName}" class="cat-image d-flex flex-column justify-content-between cat-block shadow-on border-15 border-gray orange-hover">
                                                        <h5 class="text-center">${arr[i].cName}</h5>
                                                        <img src="${arr[i].cImage}" alt="${arr[i].cName}.svg"/>
                                                        <button class="my-btn open-prod-page open-cat-btn btn-hover text-capitalize border-15" value="${i+1}">view more</button>
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
                                                        <button class="my-btn open-prod-page open-cat-btn btn-hover text-capitalize border-15" value="${i+1}">view more</button>
                                                      </div>
                                                      <div class="d-flex">`;

                            }
                            else{
                                dynamicCategories += `<div id="id${arr[i].cName}" class="cat-image d-flex flex-column justify-content-between cat-block shadow-on border-15 border-gray orange-hover">
                                                        <h5 class="text-center">${arr[i].cName}</h5>
                                                        <img src="${arr[i].cImage}" alt="${arr[i].cName}.svg"/>
                                                        <button class="my-btn open-prod-page open-cat-btn btn-hover text-capitalize border-15" value="${i+1}">view more</button>
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
if(urlPath == "/OrangeBox/index.html" || urlPath == "/OrangeBox/") writeCategories(getCategoryTS, categoriesArr, 2, 1);
if(urlPath == "/OrangeBox/index.html" || urlPath == "/OrangeBox/") writeCategories(getCategoryBS, categoriesArr, 2, 2);
if(urlPath == "/OrangeBox/products.html") writeCategories(getCategoryPicker, categoriesArr, 1, null);

// Products dynamic writing
let getNewProductsBlock = document.querySelector('#new-products-block .product-container');
let getBestSellerBlock = document.querySelector('#best-seller-block .product-container');
let getProductContainer = document.querySelector('#all-products .product-container');
function writeProducts(location, arr, rep){
    let dynamicProducts = "";
    for(let i = 0; i < rep; i++){
        dynamicProducts += `<div class="product-block shadow-on border-15 border-gray orange-hover catId-${arr[i].pCategory}">
        <h5 class="text-center">${arr[i].pName}</h5>
        <img src="${arr[i].pImage}" alt="${arr[i].pName}"/>
        <div class="d-flex justify-content-between">
        <h5 class="border-10 dPrice"><span class="hide">Price:</span> ${arr[i].pPrice}&dollar;</h5>
        <button class="my-btn open-product-btn btn-hover text-capitalize border-10" value="${arr[i].pId}">View more</button>
        </div>
        </div>`;
    }
    
    location.innerHTML = dynamicProducts;
}
if(urlPath == "/OrangeBox/index.html" || urlPath == "/OrangeBox/") writeProducts(getNewProductsBlock, newProductsArr, 8);
if(urlPath == "/OrangeBox/index.html" || urlPath == "/OrangeBox/") writeProducts(getBestSellerBlock, bestSellerArr, 8);
if(urlPath == "/OrangeBox/products.html") writeProducts(getProductContainer, productsArr, productsArr.length);

// Timer for discount
let getDiscountTablets = document.querySelector('#discount-tablets-timer');
let getDiscountTabletsDate = document.querySelector('#discount-tablets-date');
let getDiscountTv = document.querySelector('#discount-tv-timer');
let getDiscountTvDate = document.querySelector('#discount-tv-date');
function discountTimer(inputDateStart, inputDateEnd, locationTimer, locationDate){
    let dateEnd = new Date(inputDateEnd);
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;
    locationDate.innerHTML = `From ${inputDateStart} to ${inputDateEnd}`;
    
    function showRemaining() {
        let dateStart = new Date();
        let distance = dateEnd - dateStart;
        if (distance < 0) {
            clearInterval(timer);
            locationTimer.innerHTML = 'Discount finished!';
            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);
        locationTimer.innerHTML = `${days}d : ${hours}hr : ${minutes}min : ${seconds}s`;
    }
    
    timer = setInterval(showRemaining, 1000);
}
if(urlPath == "/OrangeBox/index.html" || urlPath == "/OrangeBox/") discountTimer('01/17/2023', '02/10/2023',getDiscountTablets, getDiscountTabletsDate);
if(urlPath == "/OrangeBox/index.html" || urlPath == "/OrangeBox/") discountTimer('01/17/2023', '02/05/2023',getDiscountTv, getDiscountTvDate);

// Getting product details on button click
let getOpenProductBtn = document.querySelectorAll('.open-product-btn');
let getModal = document.querySelector('#modal');
let getOverlay = document.querySelector('#overlay');
let getModalImage = document.querySelector('#modal-image');
let getModalProductQuant = document.querySelector('#m-quant');
getOpenProductBtn.forEach((el) => {
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
        getModalProductQuant.addEventListener('change', () => {
            let quantVal = parseFloat(getModalProductQuant.value);
            let totalPriceString = String(productsArr[index].pPrice * quantVal);
            let dotIndex =  totalPriceString.indexOf('.');
            let totalPriceResult =  totalPriceString.substring(0, dotIndex) + totalPriceString.substring(dotIndex, dotIndex + 3);

            getModalProductTotalPrice.innerHTML = `${totalPriceResult}&dollar;`;
        });
    })
});

// Successfully added to cart
let getAddToCartBtn = document.querySelector('#add-to-cart-btn');
if(urlPath == "/OrangeBox/index.html" || urlPath == "/OrangeBox/products.html") getAddToCartBtn.addEventListener('click', () => {
    getAddToCartBtn.classList.add("success");
    getAddToCartBtn.innerHTML = "Successfully added to cart!";
    setTimeout(() => {
        getAddToCartBtn.classList.remove("success");
        getAddToCartBtn.innerHTML = "Add to cart";
    }, 1500);
})

// Open filter modal
let getFilterModal = document.querySelector('#filter-modal');
if(urlPath == "/OrangeBox/products.html") {
    document.querySelector('#filter-btn').addEventListener('click', () => {
        getFilterModal.classList.remove('hide');
        getOverlay.classList.add('overlay-active');
    });
}

// Filter category
let getProductBlocks = document.querySelectorAll('.product-block');
let productBlockArr = Array.from(getProductBlocks);
let getAllCategories = document.querySelectorAll('#category-picker input');
getAllCategories.forEach( (el) => {
    el.addEventListener('click', () => {
        let index = el.value;
        if(el.checked){
            for(let i in productBlockArr){
                let productClassName = productBlockArr[i].className;
                let productClassNameDash = productClassName.lastIndexOf("-");
                let finalSearch = productClassName.substring(productClassName.length, productClassNameDash + 1);

                if(finalSearch != index) productBlockArr[i].classList.add('hide');
            }
            getAllCategories.forEach((el, id) => {
                let previous = el.previousElementSibling;
                if(id != index - 1) {
                    el.disabled = true;
                    previous.classList.add('greyed-out');
                } 
            });
        }
        else{
            productBlockArr.forEach( el => el.classList.remove('hide'));
            getAllCategories.forEach((el) => {
                let previous = el.previousElementSibling;
                el.disabled = false;
                previous.classList.remove('greyed-out');
            });
        }
    });
});

// Close modal on click or on Escape key
let exitOnEscapeKey = document.addEventListener('keydown', (el) => {
    if(el.key == 'Escape') {
        if(urlPath == '/OrangeBox/products.html') getFilterModal.classList.add('hide');
        getModal.classList.add('hide');
        getOverlay.classList.remove('overlay-active');
        getModalProductQuant.value = 1;
    }
});
document.querySelectorAll('.close-btn').forEach(el =>{
    el.addEventListener('click', () => {
        if(urlPath == '/OrangeBox/products.html') getFilterModal.classList.add('hide');
        getModal.classList.add('hide');
        getOverlay.classList.remove('overlay-active');
        getModalProductQuant.value = 1;
    });
})

// Open product page with selected category
let getOpenCatBtn = document.querySelectorAll('.open-prod-page');
getOpenCatBtn.forEach(el => {
    el.addEventListener('click', el => {
        urlPath = '/OrangeBox/products.html';
        document.location.pathname = urlPath;
    });
});

// Validation
function validationWithRegex(){
    let nameReg = /^([A-ZŠĐŽČĆ][a-zšđžčć]{2,30})+$/;
    let emailReg = /^[a-z][\w.]+@[a-z0-9]{3,20}(.[a-z]{3,5})?(.[a-z]{2,3})$/;
    let phoneReg = /^((\+(381))|[0])[6](\s)?[\d]{7,8}$/;
    let messageReg = /^[A-Z]*[a-zšđžčć0-9\s.!?"';:,*%#+-/_`&$={}|@]{2,30}$/;

    function checkReg(locationValue, locationError, regName, msg1, msg2, onlyIndexPage){
        if(onlyIndexPage != null) {
            $('#nwsEmail').addClass('mb-3');
        }
        if(locationValue){
            if(!regName.test(locationValue)){
                locationError.removeClass('hide');
                locationError.addClass('mb-3');
                locationError.html(`${msg1}`);
            }
            else{
                locationError.addClass('hide');
                locationError.removeClass('mb-3');
                $('#nwsEmail').removeClass('mb-3');
            }
        }
        else{
            locationError.removeClass('hide');
            locationError.addClass('mb-3');
            locationError.html(`${msg2}`);
        }
    }

    if(urlPath == '/OrangeBox/index.html') checkReg($('#nwsEmail').val(), $('#nwsEmail-error'), emailReg, 'Try format example@gmail.com', 'Email required.', 'yes');
    checkReg($('#inputFName').val(), $('#contactFName-error'), nameReg, 'First letter must be capital and 3 letters min.', 'First name required.', null);
    checkReg($('#inputLName').val(), $('#contactLName-error'), nameReg, 'First letter must be capital and 3 letters min.', 'Last name required.', null);
    checkReg($('#inputEmail').val(), $('#contactEmail-error'), emailReg, 'Try format example@gmail.com', 'Email required.', null);
    checkReg($('#inputPhone').val(), $('#contactPhone-error'), phoneReg, 'Try format +38162590278/062123456', 'Phone required.', null);
    checkReg($('#inputMessage').val(), $('#contactMessage-error'), messageReg, 'First letter must be capital and 3 letters min.', 'Message required.', null);
}
let getInputSubmit = document.querySelector('#inputSubmit');
if(urlPath == '/OrangeBox/index.html') getInputSubmit.addEventListener('click', (el) => {
    el.preventDefault();
    validationWithRegex();
});
else if(urlPath == '/OrangeBox/contact.html') getInputSubmit.addEventListener('click', (el) => {
    el.preventDefault();
    validationWithRegex();
});
