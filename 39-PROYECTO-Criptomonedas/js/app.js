const criptoMonedasSelect = document.querySelector('#criptomonedas');
const MonedasSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda ={
    moneda: '',
    criptomoneda: ''

}


// crear un promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve =>{
    resolve(criptomonedas);
})

document.addEventListener('DOMContentLoaded',()=>{
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptoMonedasSelect.addEventListener('change', leerValor);
    MonedasSelect.addEventListener('change', leerValor);
})

function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';


    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}


function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');

        option.value = Name;
        option.textContent = FullName;
        criptoMonedasSelect.appendChild(option);
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    //Validar
    const {moneda, criptoMoneda} = objBusqueda;
    if (moneda === '' || criptoMoneda === '') {
        mostrarAlerta('ambos Campos son obligatorios');
        return;
    }

    //consultar la api con los resultados

    consultarApi();

}
function mostrarAlerta(msg) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('div');
    
        divMensaje.classList.add('error');

        //mensaje de error
        divMensaje.textContent = msg;
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 1000);
    }
    
    
}

function consultarApi() {
    const {moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpiner();

    fetch(url)
     .then(respuesta=> respuesta.json())
     .then(cotizacion => {
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        
     })
}

function mostrarCotizacionHTML(cotizacion) {

    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHAANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `
    El Precio es: <span>${PRICE}</span>; `;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `
    El Precio mas alto del dia: <span>${HIGHDAY}</span>; `;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `
    El Precio mas bajo del dia: <span>${LOWDAY}</span>; `;
    
    const variacion = document.createElement('p');
    variacion.innerHTML = `
    Variacion ultimas 24 horas : <span>${CHAANGEPCT24HOUR}%</span>; `;

    const ultimasACtualizacion = document.createElement('p');
    ultimasACtualizacion.innerHTML = `
    ultima Actualizacion del dia: <span>${LASTUPDATE}</span>; `;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasACtualizacion);
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpiner() {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner')

    spinner.innerHTML = `
        
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        `;
    resultado.appendChild(spinner)
}