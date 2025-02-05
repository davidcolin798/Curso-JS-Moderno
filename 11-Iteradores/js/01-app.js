for (let i = 0; i < 10; i++) {
    console.log(`Numero ${i}`)
    
}

for (let i = 1; i < 20; i++) {
    if (i%2 === 0) {
        console.log(`el numero ${i} es par`);

        }
        else{
            console.log(`el numero  ${i} impar`);
        }
    
}
const carrito = [
    {nombre:'monitor de 27 pulgadas',  precio:500},
    {nombre:'television',  precio:190},
    {nombre:'tablet',  precio:300},
    {nombre:'audifonos',  precio:200},
    {nombre:'teclado',  precio:600},
    {nombre:'celular',  precio:700},

]
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}