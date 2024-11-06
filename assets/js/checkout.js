//load/return items from storage
let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

//draw items
let totalprice = 0;
let totalQuantity = 0; 
let listProductHTML = document.querySelector('.list');
let y = selectedProducts.map((item) => {
    totalprice += item.price * item.count;
    totalQuantity += item.count;
    
    return `
        <div class="item">
            <img class="img" src="${item.img}" alt="">
            <div class="info">
                <div class="name">${item.name}</div>
            </div>
            <div class="quantity">${item.count}</div>
            <div class="returnPrice">$${item.price}</div>
        </div>
            `;
});
listProductHTML.innerHTML = y.join().replaceAll(",", "");
document.querySelector('.totalprice').innerHTML = '$' + totalprice;
document.querySelector('.totalQuantity').innerHTML = totalQuantity;
