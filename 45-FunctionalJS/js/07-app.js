// funciones que retornan una funcion

const obtenerCliente = () => () => console.log('Davo');

const fn = obtenerCliente();
fn();
