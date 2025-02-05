iniciarApp();

function iniciarApp(){
    console.log('iniciando app...')
    segundaFuncion();
}

function segundaFuncion(){
    console.log('iniciando autentificacion');
    usuarioAutenticado('David');
}

function usuarioAutenticado(usuario){
    console.log('autenticando Usuario,... espere... ');
    console.log(`usuario ${usuario} autenticado exitosamente`);
}