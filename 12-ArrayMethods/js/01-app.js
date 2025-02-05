const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// comprobar si un valor existe en un array method

meses.forEach(mes =>{
    if(mes === 'Enero'){
        console.log('enero si existe en el arreglo')
    }
});

const resultado = meses.includes('Diciembre');
console.log(resultado)
// en un arreglo de objetos se utiliza .some

const existe = carrito.some(producto =>{
    return producto.nombre ==='Celular';
});
console.log(existe);

// tambien se utiliza en un arreglo tradicional 
const existe2 = meses.some(mes => mes ==='Febrero');
console.log(existe2);