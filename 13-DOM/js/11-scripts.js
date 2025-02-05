const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', ()=>{
//     console.log('diste click al boton');
// });

btnFlotante.addEventListener('click', mostraFooter);
function mostraFooter (){
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar';
    };
    
};