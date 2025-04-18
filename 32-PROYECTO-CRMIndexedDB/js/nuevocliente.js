(function () {
    //let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', ()=>{
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    
    

    function validarCliente(e) {
        e.preventDefault();    
        // Leer todos los imputs
        const nombre =  document.querySelector('#nombre').value;
        const email =  document.querySelector('#email').value;
        const telefono =  document.querySelector('#telefono').value;
        const empresa =  document.querySelector('#empresa').value;


        if (nombre === "" || email === "" || telefono === '' || empresa === '' ) {
            imprimirAlerta('Todos los campos son obligatorios' ,'error');
            return;
        }

        // crear un onjeto con la informacion
        const cliente ={
            nombre,
            email,
            telefono,
            empresa
            
        }

        cliente.id = Date.now();

        crearNuevoCliente(cliente);

    }

    function crearNuevoCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');

        const objectStore = transaction.objectStore('crm');
        
        objectStore.add(cliente);

        transaction.onerror = function () {
            imprimirAlerta('hubo un error', 'error');
        };

        transaction.oncomplete = function () {
            imprimirAlerta('el cliete se agrego correctamente');
            
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);
        }

    }




})();