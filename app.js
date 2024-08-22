const products = [
    {
        id: 1,
        products_name: 'Shoes Office',
        type: 'man shoes',
        description: 'this man shoes brooo',
        stock: 10,
        price: 250000,
        img_url: '/images/product-1.jpeg'
    },
    {
        id: 2,
        products_name: 'Shoes Sport',
        type: 'man shoes',
        description: 'this man shoes Sport brooo',
        stock: 10,
        price: 350000,
        img_url: '/images/product-2.jpeg'
    },
    {
        id: 3,
        products_name: 'Shoes Boats',
        type: 'women shoes',
        description: 'this women shoes brooo',
        stock: 10,
        price: 2500000,
        img_url: '/images/product-3.jpeg'
    },
]

const listProduct = products?.map((product) => `<div class="col-lg-3">
                <div class="card" style="width: 18rem;">
                    <img src="${product.img_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.products_name}</h5>
                        <p class="card-text">${product.description}</p>
                        <a href="#" class="btn btn-success">Go somewhere</a>
                    </div>
                </div>
            </div>`).join(",").replace(",", "")

const productsId = document.getElementById('products')
productsId.innerHTML = listProduct