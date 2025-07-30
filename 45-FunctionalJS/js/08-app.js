//closures

const obtenerCliente = () => {
    const nombre = 'david';
    function muestraNombre() {
        console.log(nombre);
        
    }
    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();