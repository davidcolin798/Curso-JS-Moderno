document.addEventListener('DOMContentLoaded', function() {
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }
    
    // seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const inputCC = document.querySelector('#cc')
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector("#spinner1");


    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    inputCC.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);
    btnReset.addEventListener('click', function(e){
        e.preventDefault();
        resetFormulario();

    });
    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        
        
        
        

         setTimeout(() => {
             spinner.classList.remove('flex');
             spinner.classList.add('hidden');

             resetFormulario();
            //alerta crear
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10','font-bold','text-sm','uppercase');
                alertaExito.textContent='Mensaje Enviado Con exito';
                formulario.appendChild(alertaExito);

                setTimeout(() => {
                    alertaExito.remove();
                }, 3000);
         }, 2000);

    };


    function validar(e){
    
        
        if (e.target.value.trim() === '') {
            mostrarAlerta(`el campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            
            
            return;
        }
        
        if(e.target.id === 'email' && !validadEmail(e.target.value)){
            mostrarAlerta('el Email no es Valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        if (e.target.id ==='cc' && !validadEmail(e.target.value)) {
            mostrarAlerta('el Email de Cc no es valido', e.target.parentElement);
            comprobarEmail();
            return;
            
        }
        limpiarAlerta(e.target.parentElement);
        

        //asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();
    };

    function mostrarAlerta(mensaje , referencia){
        // comprobar si ya esta una alerta

       limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white', 'text-center')

        //injectar el error al formulario
        referencia.appendChild(error);
        
    };
    function limpiarAlerta(referencia) {
        // comprobar si ya esta una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
        
    };

    function validadEmail(email, cc) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email, cc)
        return resultado;
        
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
        
    }
    function resetFormulario() {

        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }

});

let x = 5;
const modificarx =()=>{
    x+=10;
    return x;
}
const result = modificarx() + x;
console.log(result);
