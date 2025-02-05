const navegacion = document.querySelector('nav');

console.log(navegacion);
console.log(navegacion.childNodes);// los espacios en blanco son conciderados elementos
console.log(navegacion.children[0]);

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'nuevo heading desde traversing the dom';
card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[0]);


// traversing de hijo a padre

