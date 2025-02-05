const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach( (mes, i)=>{
    if (mes === 'Abril') {
        console.log(`encontrado en el indice ${i}`);
    }
});

const indice = meses.findIndex(mes => mes === 'Diciembre');
console.log(indice);

const carro = carrito.findIndex(producto => producto.nombre === 'Television');
console.log(carro)
if (carro === 1) {
    console.log('si')
}else {
    console.log('no')
}
