/// constructores

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro= function(){
    const base = 2000;
    let cantidad;
    switch (this.marca) {
        case '1':
            cantidad = base*1.15;
            break;
        case '2':
            cantidad = base*1.15;
            break;
        case '3':
            cantidad = base*1.15;
            break;
    
        default:
            break;
    }

    const diferencia = new Date().getFullYear() - this.year;
    cantidad -=((diferencia * 3) * cantidad /100);
    
   
    if (this.tipo === 'basico') {
        cantidad *= 1.30;

    }else{
        cantidad *=1.50;

    }
    
    return cantidad;
    
}
function UI() {}
    
UI.prototype.llenarOpciones = () => {
        const max =  new Date().getFullYear(),
        min = max - 20;

        const selectYear = document.querySelector('#year');

        for (let i = max; i > min; i--) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYear.appendChild(option);
            
        }
}


//Muestra alertas en la pantalla

UI.prototype.mostrarMensaje = (mensaje, tipo)=>{
    const div = document.createElement('div');

    if (tipo==='error') {
        div.classList.add('error');
    }
    else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //insertar en el HTML

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

}

UI.prototype.mostrarResultado = (total, seguro)=>{
    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = "Americano";
            break;
        case '2':
            textoMarca = "Asiatico";
            break;
        case '3':
            textoMarca = "Europeo";
            break;
    
        default:
            break;
    }

    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
    <p class="header"> Tu resumen </p>
    <p class="font-bold"> Marca : ${textoMarca}</p>
            <p class="font-bold"> Tipo : ${tipo}</p>
            <p class="font-bold"> Ano : ${year}</p>
        <p class="font-bold"> Total : $ ${total}</p>

    `;

    const resultadoDiv = document.querySelector('#resultado');
   

    const spinner = document.querySelector('#cargando');
    spinner.style.display = "block";

    setTimeout(() => {
       spinner.style.display= 'none';  
       resultadoDiv.appendChild(div);
    }, 3000);

}


const ui = new UI();

document.addEventListener('DOMContentLoaded', ()=>{
    ui.llenarOpciones();
})


eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);   
}

function cotizarSeguro(e) {
    e.preventDefault();

    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //leer el year
    const year = document.querySelector('#year').value;

    // leer el tipo de seguro
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca===''|| year===''||tipo==='') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
        return;
    }
    
    ui.mostrarMensaje('Cotizando','correcto');

    const resultados =  document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
        
    }

     //instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();        
    //Utilizar el prototipe
    ui.mostrarResultado(total, seguro);
    
}