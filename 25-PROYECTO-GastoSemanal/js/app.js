//variables y selectores

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector("#gastos ul");


//eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
        
    }
    nuevoGasto(gasto){    
        this.gastos = [...this.gastos, gasto]; 
        this.calcularREstante();
    }
    calcularREstante(){
        const gastado = this.gastos.reduce(( total, gasto) => total + gasto.cantidad, 0);
        
        this.restante = this.presupuesto - gastado;

    }
    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto=>gasto.id !== id);
        this.calcularREstante();       
    }
}

class UI {
   instertarPresupuesto(cantidad){
    // Extrayendo el valor
    const {presupuesto, restante} = cantidad;
    //agregarlo al HTML
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;

   }
   imprimirAlerta(mensaje, tipo){
    //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
            
        }else{
            divMensaje.classList.add('alert-success');
        }
        //mensaje de error
        divMensaje.textContent = mensaje;

        // insertar en el HTML

        document.querySelector('.primario').insertBefore(divMensaje, formulario );
        // quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
   }
   mostrarGastos(gastos){
    this.limpiarHTMl();        
    
    //iterar sobre los gastos

    gastos.forEach(gasto => {
        const {cantidad, nombre, id} = gasto;
        //crea un li
        const nuevoGasto = document.createElement('li');
        nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
        nuevoGasto.dataset.id = id;
        //agregar el html del gasto
        nuevoGasto.innerHTML = `
            ${nombre}<span class="badge badge-primary badge-pill"> $ ${cantidad}</span>
        `
        // boton para borrar el gasto
        const btnBorrar = document.createElement('button');
        btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
        btnBorrar.innerHTML = 'Borrar &times'
        btnBorrar.onclick = () =>{
            eliminarGasto(id);
        }
        nuevoGasto.appendChild(btnBorrar);

        //agregar al html
        gastoListado.appendChild(nuevoGasto);
    });
   }
   limpiarHTMl(){
    while (gastoListado.firstChild ) {
        gastoListado.removeChild(gastoListado.firstChild);
        
    }
    
   }
   actualizarRestante(restante){
    document.querySelector('#restante').textContent = restante; 
   }
   comprobarPresupuesto(presupuestoObj){
    const {presupuesto, restante} = presupuestoObj;
    const restanteDiv = document.querySelector('.restante');

    if (presupuesto/4 > restante) {
        restanteDiv.classList.remove('alert-success', 'alert-warning');
        restanteDiv.classList.add('alert-danger');
    }else if ((presupuesto / 2 )> restante) {
        restanteDiv.classList.remove('alert-success');
        restanteDiv.classList.add('alert-warning')
    }else {
        restanteDiv.classList.remove('alert-success', 'alert-warning');
        restanteDiv.classList.add('alert-success')

    }
    // si el total es de 0 o menor


    if (restante <= 0 ) {
        ui.imprimirAlerta('el presupuesto se ha agotado', 'error');
        formulario.querySelector('button[type="submit"]').disabled = true;
        
    }
   }
}
const ui = new UI();
let presupuesto;
//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    

    if (presupuestoUsuario === '' || presupuestoUsuario=== null || isNaN(presupuestoUsuario)|| presupuestoUsuario<=0) {
        window.location.reload();
    }

    //presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.instertarPresupuesto(presupuesto);

}

function agregarGasto(e) {
    e.preventDefault();


    //leer los datos del formulario

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    //Generar un objeto con el gasto

    const gasto = {nombre, cantidad, id: Date.now() }
    presupuesto.nuevoGasto( gasto );
    
    //mensaje de ejecucion correcta
    ui.imprimirAlerta('Gasto agregado correctamente');

    //imprimir los gastos
    const { gastos, restante }= presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);


    // reiniciar el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);

    const {gastos , restante} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}