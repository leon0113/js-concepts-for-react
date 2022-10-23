const products = [
    { name: 'Laptop', price: 50000, brand: 'ASUS', color: 'silver' },
    { name: 'Phone', price: 18000, brand: 'IPhone', color: 'black' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'blue' },
    { name: 'Sunglass', price: 300, brand: 'lenscart', color: 'black' },
    { name: 'camera', price: 70000, brand: 'Nikon', color: 'black' },
];
//! map 
const brands = products.map(product => product.brand);
// console.log(brands);
for (const brand of brands) {
    // console.log(brand);
}

//! forEach
products.forEach(product => product.color);

// products.forEach(product => {

// });


//! filter

const below5000 = products.filter(product => product.price < 5000);
// console.log(below5000);


const name = products.filter(product => product.name.includes('n'));
// console.log(name);


//! find

const special = products.find(p => p.name.includes('n'));
console.log(special);