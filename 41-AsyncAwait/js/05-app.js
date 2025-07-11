const url = 'https://picsum.phoyos/list'

document.addEventListener('DOMContentLoaded', obtenerDatos);


//con promises
function obtenerDatos() {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
    
}

//con async await

async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
        
    } catch (error) {
        console.log(error);
        
    }
}