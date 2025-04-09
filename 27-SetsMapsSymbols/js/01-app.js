const carrito = new Set();

carrito.add('camisa');
carrito.add('disco 1');
carrito.add('disco 2');
carrito.add('disco 3');

console.log(carrito.delete('guitarra'));

console.log(carrito.has('Guitarra'));

console.log(carrito.size);

carrito.clear();

console.log(carrito);

carrito.forEach((producto, index, pertenece) => {
    console.log(producto);
    console.log(index);
    console.log(pertenece);
});

//DEl siguiente arreglo elimina los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
