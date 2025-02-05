const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado.innerHTML);// se trae el html
console.log(encabezado.innerText);// si en css - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);// so lo encuentra

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';