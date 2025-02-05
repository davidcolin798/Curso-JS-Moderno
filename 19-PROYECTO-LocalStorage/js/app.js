const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[]

eventListeners();


function eventListeners(){
    // cuaodn el uisuaro agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
    // cuando el domuento esta listo
    document.addEventListener('DOMContentLoaded',()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        creaHTML();
        
    })
};

function agregarTweet(e){
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if (tweet ==='') {
        mostrarError('El mensaje no puede ir vacio');
        return;
    }
    const tweetObj = {
        id: Date.now(),
        tweet
    }
    //anadir al arreglo de tweets
    tweets = [... tweets, tweetObj];
    creaHTML();


    formulario.reset();
    
};

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');

    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
    
}

function creaHTML(){

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
//agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);

            }


            const li = document.createElement('li');

            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);


            listaTweets.appendChild(li);
        } )
        
    }

    sincronizarStorage();

};


function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}


function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    creaHTML();
}

function limpiarHTML() {
    while (listaTweets.firstChild) {

        listaTweets.removeChild(listaTweets.firstChild);
    }
    
}