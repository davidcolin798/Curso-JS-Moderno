

function sumar (a,b){
    return a + b;
}
const resultado = sumar(2,3);
console.log(resultado);

// ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio){
    return total+=precio;

}
function calcularImpuesto(total){
    return total * 1.16;
}
total=agregarCarrito(300);
total=agregarCarrito(600);
total=agregarCarrito(100);


const totalPagar =calcularImpuesto(total);

console.log(`el total a pagar es de ${totalPagar}`);