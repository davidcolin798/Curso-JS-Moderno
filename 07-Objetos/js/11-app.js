const producto ={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true,
    mostrarInfo: function(){
        console.log(`el producto ${this.nombre} tiene el precio de: ${this.precio}`)
    }
}
producto.mostrarInfo();