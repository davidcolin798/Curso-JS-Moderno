const primerEnlace = document.querySelector('a');
primerEnlace.remove();


// eliminar desde el padre
const navegacion = document.querySelector('.navegacion');

navegacion.removeChild(navegacion.children[2]);