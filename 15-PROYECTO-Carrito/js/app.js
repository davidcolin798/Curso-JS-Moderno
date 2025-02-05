//variables
const carrito = document.querySelector('#carrito');
const contenedoCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const cursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners (){
    //cuando agregas un curso precionando el "Agregar Carrito"
    cursos.addEventListener('click', agregarCurso);

    // elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //muestra los cursos del storage
    document.addEventListener('DOMContentLoaded', ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })

    //vaciar carito
    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito =[];
        limpiarHTML();
    })
}

// Funciones

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

// eliminar curso

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();//iterar sobre el carrito y mostrar su html
        
    }

} 

function leerDatosCurso (curso){
    console.log(curso);
    //crear un objeto coe el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    //revisar si un elemento ya esta en el carrit
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articulosCarrito.map(curso =>{
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso;
            }else{return curso;}            }   
        );
        articulosCarrito = [...cursos]
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    
   //agregar elementos al carrito
   
    console.log(articulosCarrito);
    carritoHTML();
    
}


//muestra el carrito en el html
function carritoHTML(){
// limpiar el html
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const {imagen, titulo, precio, cantidad, id} = curso;
        row.innerHTML =`
        <td>
            <img src= "${imagen}" width = "100">
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href = "#" class = "borrar-curso" data-id = "${id}"> X </a>
        </td>
        `;
        // agrega el html del carrito en el tbody
        contenedoCarrito.appendChild(row);
    });

    //agregar el carrito de compras al storage
    sincronizarStorage();
};

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
    
}
//elimina los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contenedoCarrito.innerHTML = '';
    //forma rapida
    while (contenedoCarrito.firstChild) {
        contenedoCarrito.removeChild(contenedoCarrito.firstChild);
    }
};