const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('si eres usuario');
}else if (!puedePagar && !usuario) {
    console.log('no puedes comprar');
}else if (!usuario) {
    console.log('Inicia sesion o crea una cuenta');
}else if (!puedePagar) {
    console.log('Fondos insuficientes');
}