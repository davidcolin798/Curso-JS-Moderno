const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'monitor');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));

console.log(WeakMap);


