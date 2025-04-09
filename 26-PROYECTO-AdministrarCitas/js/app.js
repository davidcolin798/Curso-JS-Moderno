// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');


const formulario = document.querySelector('#formulario-cita');
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]');
const contenedorCitas = document.querySelector('#citas');


//Eventos
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
phoneInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

let editando = false;

//Objeto de cita
const citaObj = {
    id: generarId(),
    paciente:'',
    propietario:'',
    email:"",
    phone:'',
    fecha:'',
    sintomas:''
}

//CLases
class Notificacion {
    constructor({texto, tipo}) {
        this.texto = texto;
        this.tipo = tipo;
        this.mostrar();
    }
    mostrar(){
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5','alert',
            'uppercase', 'font-bold', 'text-sm');
            
            //ELiminar alertas duplicadas
            const alertaPrevia = document.querySelector('.alert')
            alertaPrevia?.remove();
            
        
            //Si es de tipo error agrega una clase
            this.tipo === 'error' ? alerta.classList.add('bg-red-500'):alerta.classList.add('bg-green-500');

            //Mensaje de error
            alerta.textContent = this.texto;

            //Insertar en el DOOM
            formulario.parentElement.insertBefore(alerta, formulario);

            //Quitar despues de 3 segundos
            setTimeout(() => {
                alerta.remove();
            }, 2000)
    }
}

class AdminCitas {
    constructor() {
        this.citas = []
    }
    agregar(cita){
        this.citas = [...this.citas, cita];
        this.mostrar();
    }

    editar(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.mostrar();
    }

    eliminar(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
        this.mostrar();
        console.log(id);
        
    }

    mostrar(){
        //limpiar el HTML 
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        //comprobar si hay citas
        if (this.citas.length === 0) {
            contenedorCitas.innerHTML = `<p class"text-xl mt-5 mb-10 text-center"> No hay pacientes</p> `;
            return;
        }

        //Generando las citas
        this.citas.forEach( cita =>{
            const divCita = document.createElement("DIV");
            divCita.classList.add('mx-5','my-10','bg-white','shadow-md','px-5','py-10','rounded-xl');

            const paciente = document.createElement('P');
            p5aciente.classList.add('dond-normal', 'mb-3', 'text-gray-700', 'normal-case');
            paciente.innerHTML = `<span class = 'font-bold' uppercase>
            Paciente:</span> ${cita.paciente}`;
            const propietario = document.createElement('P');
            propietario.classList.add('dond-normal', 'mb-3', 'text-gray-700', 'normal-case');
            propietario.innerHTML = `<span class = 'font-bold' uppercase>Propietario:</span> ${cita.propietario}`;
            const email = document.createElement('P');
            email.classList.add('dond-normal', 'mb-3', 'text-gray-700', 'normal-case');
            email.innerHTML = `<span class = 'font-bold' uppercase>Email:</span> ${cita.email}`;
            const phone = document.createElement('P');
            phone.classList.add('dond-normal', 'mb-3', 'text-gray-700', 'normal-case');
            phone.innerHTML = `<span class = 'font-bold' uppercase>Telefono:</span> ${cita.phone}`;
            const fecha = document.createElement('P');
            fecha.classList.add('dond-normal', 'mb-3', 'text-gray-700', 'normal-case');
            fecha.innerHTML = `<span class = 'font-bold' uppercase>Fecha:</span> ${cita.fecha}`;
            const sintomas = document.createElement('P');
            sintomas.classList.add('dond-normal', 'mb-3', 'text-gray-700', 'normal-case');
            sintomas.innerHTML = `<span class = 'font-bold' uppercase>Sintomas:</span> ${cita.sintomas}`;
            

            //botones de Eliminar y editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold',
                'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = `Editar`;
            const clone = structuredClone(cita);
            btnEditar.onclick = () => cargarEditor(clone);


            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold',
                'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = `Eliminar`;
            btnEliminar.onclick = () => this.eliminar(cita.id);

            const contenedorBotones = document.createElement('DIV');
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');
            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            //Inyectar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(phone);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);

            contenedorCitas.appendChild(divCita);
        })
    }
}

//Funciones

function datosCita(e) {
    citaObj[e.target.name] = e.target.value 
}

const citas = new AdminCitas();

function submitCita(e) {
    e.preventDefault();

   if (Object.values(citaObj).some(valor => valor.trim() === "")) {
        new Notificacion({
            texto:'Todos los campos son obligatorios',
            tipo:'error'
        })
    
        return;    
    }

    if (editando){
        citas.editar({...citaObj})
        new Notificacion ({
            texto:'paciente actualizado con exito',
            tipo:'exito'
        });
    }else{
        citas.agregar({...citaObj}); 
        new Notificacion ({
            texto:'paciente agregado con exito',
            tipo:'exito'
        });
    }

    
    formulario.reset();
    reiniciarObjetoCita();
    formularioInput.value = 'Registrar paciente'
    editando = false;
   


    
}

function reiniciarObjetoCita() {
    // citaObj.paciente = '';
    // citaObj.propietario = '';
    // citaObj.email = '';
    // citaObj.fecha = '';
    // citaObj.sintomas = '';

    Object.assign(citaObj, {
        id: generarId(),
        paciente:'',
        propietario:'',
        email:"",
        phone:'',
        fecha:'',
        sintomas:''
    })
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now()
}

function cargarEditor(cita) {
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    phoneInput.value = cita.phone
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando = true;
    formularioInput.value = 'guardar cambios';
    
}
