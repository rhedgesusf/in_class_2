// Task 1 

let products = [
{ name:  "Laptop", price: 1200  , category: "Electronics"},
{ name:  "Notebook", price: 5  , category: "Stationery"}
];

function getProductsByCategory(product,s category) {
    return products.filter(product => product.category === category)
}

console.log(getProductsByCategory(products, "Electronics"));

// Task 2 

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }
    ))
}

console.log(applyDIscount(products, .1))
console.log("*".repeat(20))
console.log(products)

