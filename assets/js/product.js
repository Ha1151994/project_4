let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.CartTab');
let listProduct = document.querySelector('.container');
let listcart = document.querySelector(".listcart");
let close = document.querySelector('.Close');
let listProductHTML = document.querySelector('.Product_container')
let totalQuantity = document.querySelector(".totalQuantity");
let searchTxt = document.querySelector("#search_txt");
let searchDepartment = document.querySelector("#search_department");




let Product_container = [
    {
        "id": 1,
        "name": "html",
        "price": 200,
        "img": "assets/img/work-1.webp",
        "department": "prgramming",
        "count": 1
    },
    {
        "id": 2,
        "name": "js",
        "price": 200,
        "img": "assets/img/work-2.webp",
        "department": "prgramming",
        "count": 1
    },
    {
        "id": 3,
        "name": "php",
        "price": 500,
        "img": "assets/img/work-3.webp",
        "department": "prgramming",
        "count": 1
    },
    {
        "id": 4,
        "name": "python",
        "price": 300,
        "img": "assets/img/work-4.webp",
        "department": "web",
        "count": 1
    },
    {
        "id": 5,
        "name": "java",
        "price": 250,
        "img": "assets/img/work-5.webp",
        "department": "web",
        "count": 1
    },
    {
        "id": 6,
        "name": "c#",
        "price": 430,
        "img": "assets/img/work-6.webp",
        "department": "design",
        "count": 1
    },
    {
        "id": 7,
        "name": "js",
        "price": 430,
        "img": "assets/img/work-6.webp",
        "department": "web",
        "count": 1
    }
]
let selectedProducts = [];




iconCart.addEventListener('click', () => {
    if (cart.style.right == '-10%') {
        cart.style.right = '0';
    } else {
        cart.style.right = '-10%';
    }
})
close.addEventListener('click', () => {
    cart.style.right = '-10%';
})

function drawItems(item_name, item_department) {
    var filtered_products = [];

    //search by name
    if (item_name !== "") {
        var filtered_products = Product_container.filter(a => a.name == item_name);
    } else {
        filtered_products = Product_container;
    }

    //search by department
    if (item_department !== "") {
        var filtered_products = filtered_products.filter(a => a.department == item_department);
    } else {
        filtered_products = filtered_products;
    }

    //draw items
    let y = filtered_products.map((item) => {
        return `
     <div class="Product_card">
            <img src="${item.img}" alt="">
            <h3>${item.name}</h3>
            <div class="price">$${item.price}</div>
            <button class="Product__button" onclick="addToCart(${item.id})">Add To Cart</button>
        </div>
                `;
    });
    listProductHTML.innerHTML = y.join().replaceAll(",", "");
}
drawItems("", "");




let addToCart = function (item_id) {
    
    if (document.getElementById(`item-number-${item_id}`)) {
        //addOne
        addOne(item_id);

        //copy item by id
        selectedProducts.filter(a => a.id == item_id)[0].count++;
        //selectedProducts.filter(a => a.id == item_id)[0].totalprice++;

    } else {
        //new product
        let item = Product_container.filter(a => a.id == item_id)[0];
        //copy item by id

        selectedProducts.push(item)

        //draw items
        let y = `
                    <div class="item" id="item-number-${item.id}">
                        <img src="${item.img}"/>
                        <div class="content">
                            <div class="name">${item.name}</div>
                            <div class="totalprice">$${item.price}</div>
                        </div>
                        <div class="quantity">
                            <span class="Minus" onclick="minusOne(${item.id})">-</span>
                            <span id="Number-${item.id}">1</span>
                            <span class="Plus" onclick="addOne(${item.id})">+</span>
                        </div>
                    </div>
                `;

        listcart.innerHTML += y;
    }


    //set count
    totalQuantity.innerHTML = selectedProducts.length;
};

let addOne = function (item_id) {
    let count = document.getElementById(`Number-${item_id}`);
    count.innerHTML = parseInt(count.innerHTML) + 1;
}

let minusOne = function (item_id) {
    let count = document.getElementById(`Number-${item_id}`);
    count.innerHTML = parseInt(count.innerHTML) - 1;
}


let addPrice = function (item_id) {
    let count = document.getElementById(`Number-${item_id}`);
    count.innerHTML = parseInt(count.innerHTML) ++;
}
 
let arrayOFtasks = [];

 close.onclick = function (){
    selectedProducts = [];
    listcart.innerHTML = '';
    totalQuantity.innerHTML = '0';

 }

 checkout = function(){
    //save selected items in localstorage
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    //
    window.location.href = "checkout.html";
 }

 
//search name
searchTxt.addEventListener("keyup", function (e) {
    drawItems(searchTxt.value, searchDepartment.value);
})


//search department
searchDepartment.addEventListener("change", function (e) {
    drawItems(searchTxt.value, searchDepartment.value);
})



