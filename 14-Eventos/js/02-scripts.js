const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseout', ()=>{
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('dblclick', ()=>{
    console.log('entrando de la navegacion');
    nav.style.backgroundColor = 'black';
});

//mousedown - similar a dar click
//click
//dblclick - doble click
//mouseup - cuando sueltas el mouse
