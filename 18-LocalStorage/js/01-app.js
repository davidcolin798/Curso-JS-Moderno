localStorage.setItem('nombre', 'juan');
sessionStorage.setItem('nombre','david')

const producto = {
    nombre: "monito de 24 pulgadas",
    precio: 2000
}
;

const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString);


const meses =['enero', 'febrero', 'marzo'];

localStorage.setItem('meses', JSON.stringify( meses ));