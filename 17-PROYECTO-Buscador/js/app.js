const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color= document.querySelector('#color');
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',

}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);//muestra los automoviles al cargar
    llenarSelect();
});

marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
    
});

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
    
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
    
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
    
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
    
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
    
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    
    
});

function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
          ${marca}   ${modelo} - ${year} - ${puertas} Puertas - transmision ${transmision} - Color ${color} - Precio ${precio}
        `;
        resultado.appendChild(autoHTML);
    });
    
};

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }   
}


function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
 
    }
    
    
};

function filtrarAuto() {
const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuerta).filter(filtrarTransmision).filter(filtrarColor);

if (resultado.length) {
    mostrarAutos(resultado);
}else{
    noResultado();
}
   
};

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'no hay un resultado intenta con otras opciones';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;

};
function filtrarYear(auto) {
    const {year} = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
    
};

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
};
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo)
    {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
    
};
function filtrarPuerta(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }
    return auto;

};

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;

};

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto;

};
