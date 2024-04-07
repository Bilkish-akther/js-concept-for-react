const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];


// map

const brands = products.map(product => product.brand);
// console.log(brands)

const prices = products.map(product => product.price);
// console.log(prices);

const colors = products.map(product => product.color);
// console.log(colors)


// for each
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);


//4. find
const special = products.find(p => p.name.includes('n'));
console.log(special);

