"use strict";

const producto ={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true

}
Object.seal(producto);
//solo puedes modificar las llaves pero no puedes poner mas y tampoco eliminar ninguna
Object.freeze(producto);
//no te deja modificar ningun parametro de tu objeto
producto.imagen ="imagen.jpg"
producto.disponible = false;
