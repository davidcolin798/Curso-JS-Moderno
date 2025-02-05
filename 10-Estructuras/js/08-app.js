const autenticado = true;

if(autenticado){

    console.log("EL usuario esta autenticado");

}

const puntaje = 450;
function revisarPuntaje()
{
    if(puntaje>400){
        console.log(" Exelente");
            return;
        
    }
    if (puntaje>300) {
        console.log('buen puntaje ... felicidadades');
        return;
        
    }
}

revisarPuntaje();