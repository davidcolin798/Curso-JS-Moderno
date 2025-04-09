let DB;


document.addEventListener('DOMContentLoaded', ()=>{
    crmDB();


    setInterval(() => {
        crearCliente();
    }, 5000);
})


function crmDB() {
    //crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // si hay un error
    crmDB.onerror = function(){
        console.log('hubo un error a la hora de crear una BD');
    }

    //si se creo bien 
    crmDB.onsuccess = function(){
        console.log('base de datos creada');

        DB = crmDB.result;
    }
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true 
        });
        objectStore.createIndex('nombre', 'nombre', { unique:false });
        objectStore.createIndex('email', 'email', {unique: true });
        objectStore.createIndex('telefono', 'telefono', {unique: false });
        

        console.log('columnas creadas');
        
    }

}

function crearCliente(e) {
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function(){
        console.log('transaccion completada');
    }
    transaction.onerror = function(){
        console.log('hubo un error en la transaccion');
    }
     const objectStore = transaction.objectStore('crm');

     const nuevoCLiente ={
        telefono: 7412589632,
        nombre: 'david',
        email:'dcolin798@gmail.com'
     };
     const peticion = objectStore.add(nuevoCLiente);

     console.log(peticion);
     
    
}