const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('Descuento aplicado')
    }else{
        reject('No se puedo aplicar el descuento');
    }
});

aplicarDescuento
    .then(resultado =>descuento(resultado))
    .catch(error=>{console.log(error);})



// hay tres valores posibles
// fulfilled - promise se cumplio
// reject - el promise no se cumplio
// pending - no se ha cumplido pero tampoco se ha rechazado

function descuento(mensaje) {
    console.log(mensaje);
    
}