const productsData = {
    'Електроніка': [
        { name: 'Смартфон', price: '1200$' },
        { name: 'Пральна машина', price: '1500$' },
        { name: 'Ігрова приставка', price: '2000$'}
    ],
    'Одяг': [
        { name: 'Футболка', price: '20$'},
        { name: 'Кепка', price: '15$'},
        { name: 'Кеди', price: '50$'}
    ], 
    'Книги': [
        { name: 'Роман', price: '5$'},
        { name: 'Детектив', price: '3$'},
        { name: 'Література', price: '6$'}
    ]
};

function showProducts(category) {
    let productList = document.getElementById ('product-list')
    productList.innerHTML = '';

    if (productsData.hasOwnProperty(category)) {
        let products = productsData[category];

        for (let i = 0; i < products.length; i++) {
            let product = products[i]; 
            let li = document.createElement('li');
            li.innerHTML = product.name;
            li.onclick = function() {
                showProductDetails(product);
            };
            productList.appendChild(li);
        }
    }
}

function showProductDetails(product) {
    let productDetails = document.getElementById('product-details');
    productDetails.innerHTML = '<strong>Назва:</strong>' + product.name + '<br><strong>Ціна:</strong>' + product.price;
}

function buyProduct() {
    alert('Товар куплений!');
    resetState();
}

function resetState() {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';

    let productDetails = document.getElementById('product-details');
    productDetails.innerHTML = '';

    let buyButton = document.getElementById('buy-button');
    buyButton.style.display = 'none';
}

