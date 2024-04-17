const imageOpen = document.getElementById('imageOpen');
const willBeClose = document.getElementById('willBeClose');
const weOpen = document.getElementById('weOpen');
const timer = document.getElementById('timer');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
let search = document.querySelector('#search');
var num = 0;
var searchExists = false;

const cardButton = document.getElementById('cardButton');
const card = document.getElementById('ShoppingCart');

cardButton.onclick=()=>{
    card.id = 'card'
    const closecard=document.getElementById('close-card');
    console.log(closecard)
    closecard.style.visibility="visible";
    const page = document.createElement('div');
    page.id = "page1";
    document.body.appendChild(page);
    page.style.display = "block";
    card.style.visibility="visible";
    closecard.onclick=()=>{
    document.body.removeChild(page);
    closecard.style.visibility="hidden";
    card.style.visibility="hidden";
  }
}
  

const searchButton = document.querySelector('#searchIconButton');
const top1 = document.getElementById('top');
const searchText = document.createElement('input');
// searchText.setAttribute('class', 'col-sm-2 col-md-2 col-2');
searchButton.onclick = () => {
    top1.appendChild(searchText);
};

const a = [
    {
        category: '0',
        categoryName: "מנות פתיחה",
        products: []
    }, {
        category: '1',
        categoryName: "סלטים",
        products: []
    }, {
        category: '2',
        categoryName: "מהטאבון",
        products: []
    }, {
        category: '3',
        categoryName: "מוקרמים",
        products: []
    }, {
        category: '4',
        categoryName: "קינוחים",
        products: []
    }, {
        category: '5',
        categoryName: "שתיה",
        products: []
    }
]

const newDivProduct = document.getElementById('newDivProduct');
const divProducts = document.getElementById('divProducts');
var prevSearch, num1 = 0;
let ul = document.getElementById('ul');
let li = document.createElement('li');
let button = document.createElement('button');
button.onclick = () => {
    const targetElement = document.getElementById('searchTitle');
    targetElement.scrollIntoView({ behavior: 'smooth'});
}
const searchChanged = (products) => {
    if(searchText.value){
        search = searchText;
    }
    num = 0;
    if(prevSearch){
        if(!search.value)
            num = 1;
        if(searchText === search){
            divProducts.style.marginTop = '240px';
            if(!searchText.value){
                top1.removeChild(searchText);
            }
        }
        else{
            divProducts.style.marginTop = '130px';
        }
        if(num1 === 1){
            var searchTitle = document.getElementById('searchTitle');
            newDivProduct.removeChild(searchTitle);
            searchExists = false;
        }
        if(num1 === 2){
            var searchTitle = document.getElementById('searchTitle');
            var searchAll = document.getElementById('searchAll');
            newDivProduct.removeChild(searchTitle);
            newDivProduct.removeChild(searchAll);
            searchExists = false;
        }
        num1 = 0;
        ul.removeChild(li);
        li.removeChild(button);
    }
    if(search.value){
        searchExists = true;
        ul.prepend(li);
        li.prepend(button);
        button.setAttribute('class', 'btn btn-outline-secondary border-0 p-3');
        li.setAttribute('class', 'list-group-item p-md-0 py-lg-3 border-0');
        button.innerHTML = search.value;
        products.forEach(product => {
            if((product.name.includes(search.value) || (product.description && product.description.includes(search.value))) && num===0){
                num = 1;
                num1 = 2;
                divProducts.style.marginTop = '0';
                let searchTitle= `
                <div id="searchTitle" class=" col-lg-12 col-md-8 col-sm-11 col-12 pt-4 shadow-lg p-3 bg-body-tertiary bg-light row-lg-8
                center border-radius-all"><h3 class="gold text-center">${"תוצואת עבור: "+ search.value}</h3></div>`
                let searchAll = `
                <div id="searchAll" class="col-lg-12 col-md-8 col-sm-11 col-11 pt-4 shadow-lg p-3 bg-body-tertiary bg-light m-3 row-lg-8
                border-radius-all"></div>`
                $("#newDivProduct").append(searchTitle);
                $("#newDivProduct").append(searchAll);
            }
            if(product.name.includes(search.value) || (product.description && product.description.includes(search.value))){
                let html = `
                <div id="searchCategory" class="oneCategory bg-light pr-0 border-radius-all
                col-lg-12 shadow-lg  bg-body-tertiary bg-light mt-4 row-lg-8">
                    <div class="d-flex">
                        <img id="productImg" class="border-radius" src="./תמונות/${product.src}">
                        <div id="productName" class="d-flex flex-column justify-content-between w-100 p-2">
                    <div class="d-flex justify-content-between align-items-start">
                        <h5 class="mr-4 gold">${product.name}</h5><br>
                        <h4 class="price gold">${product.price}₪</h4>
                    </div>
                    <div class="d-flex justify-content-start">
                    ${product.description?`<h6 class="text-center">${product.description}</h6>`:' '}
                    </div>
                        <div class="d-flex justify-content-end ">
                            <button id="addToCard"class="border-radius-all"  type="button">+ הוסף</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                $("#searchAll").append(html);
            }
        })
    }
        if(num === 0){
            let searchTitle= `
                <div id="searchTitle" class=" col-lg-12 col-md-8 col-12 pt-4 shadow-lg p-3 bg-body-tertiary bg-light row-lg-8
                center border-radius-all"><h3 class="gold text-center">${"לא נמצאו תוצאות עבור: "+ search.value}</h3></div>`
                divProducts.style.marginTop = '0';
                if(num1 === 0)
                    num1 = 1;
                $("#newDivProduct").append(searchTitle);
        }
        prevSearch = search.value;
        popup();
}


$.ajax({
    url: "./product.json",
    success: (result) => {
        products = result;

        search.onchange = () => {
        searchChanged(products);
       }

            searchText.onchange = () => {
                searchChanged(products);
            };

       let i=0, j=0, prev=-1;
        a.forEach(product => {
            let categories = `
            <div id="prodPlace-${j}" class="col-lg-12 col-md-8 pt-4 shadow-lg p-3 bg-body-tertiary bg-light m-3 
            center border-radius-all">
            </div>`
            let title = `
            <div id="title-${j}" class=" col-lg-12 col-md-8 pt-4 shadow-lg p-3 bg-body-tertiary bg-light m-3    
            center border-radius-all"><h3 class="gold text-center">${product.categoryName}</h3></div>`
            $("#divProducts").append(title);
            $("#divProducts").append(categories);
            while(products[i+1]!=null && products[i+1].category == product.category){
               i++;
                while(i > prev+1){
                    i--;
                }
                    let html = `
                <div id="oneCategory" class="oneCategory bg-light mt-4 border-radius-all">
                    <div class="d-flex">
                        <img id="productImg" class="border-radius" src="./תמונות/${products[i].src}">
                        <div id="productName" class="d-flex flex-column justify-content-between w-100 p-2">
                    <div class="d-flex justify-content-between align-items-start flex-wrap">
                        <h5 class="mr-4 gold">${products[i].name}</h5><br>
                        <h4 class="price gold">${products[i].price}₪</h4>
                    </div>
                    <div class="d-flex justify-content-start flex-wrap">
                    ${products[i].description?`<h6 class="text-center">${products[i].description}</h6>`:' '}
                    </div>
                        <div class="d-flex justify-content-end ">
                            <button id="addToCard"class="border-radius-all"  type="button">+ הוסף</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        $("#prodPlace-"+j).append(html);
        prev++;
        }
        j++;
      });
      
      popup();
    },
    error: (err) => {
    }
    
    });

    
let catBut = document.querySelectorAll('.cat-but');
catBut.forEach(but => {
but.onclick = () => {
 const targetElement = document.getElementById('title-' + but.id);
 targetElement.scrollIntoView({ behavior: 'smooth' });
}
});

funcSize = () => {
    var screenWidth = window.innerWidth;

    if(screenWidth < 992 && screenWidth > 667 && searchExists === false){
        divProducts.style.marginTop = '240px';
    }

    if(screenWidth > 992 && searchExists === false){
        divProducts.style.marginTop = '130px';
    }

    if(searchExists === true && divProducts.style.marginTop !== '0'){
        divProducts.style.marginTop = '0';
    }
};

setInterval(funcSize, 1000);




