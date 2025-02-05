//object literal
const producto ={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true,
}


//object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

}
const producto2 = new Producto("monitor 24 pulgadas", 500);
console.log(producto2);