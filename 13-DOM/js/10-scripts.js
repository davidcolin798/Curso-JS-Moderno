const enlace = document.createElement('a');

enlace.textContent = ' Nuevo enlace';

enlace.href = '/nuevo-enlace';
enlace.tarjet = '_blank';

const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);

// crear un card de forma dinamica

const parrafo = document.createElement('p');
parrafo.textContent = 'concierot';
parrafo.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'conciero de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = 'concierot';
parrafo3.classList.add('dinero');

// Crear div con la clase info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen

const imagen = document.createElement('img');
imagen.src ='img/hacer2.jpg';

// Crear el card

const card = document.createElement('div');
card.classList.add('card');

// asignar la imagen
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

//insertar en el html

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
