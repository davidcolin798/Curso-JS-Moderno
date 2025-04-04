const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// .reduce es tomar una cantidad de datos unirlos y darte un resultado


// cou un foreach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

// con el reduce

let resultado = carrito.reduce((total, producto)=> total + producto.precio, 0);
console.log(resultado);