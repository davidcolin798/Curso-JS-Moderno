const  notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{
    Notification
    .requestPermission()
    .then( resultado => {
        console.log('El resultado es ', resultado);
        
    })
})

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
       const notificacion = new Notification('Esta es la notificacion',{
             body: 'ester es el texto que puedes usar'
        });
    
        notificacion.onclick = function(){
            window.open('https://www.google.com');
        }
    }
})