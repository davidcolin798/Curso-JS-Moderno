const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais)
    console.log(`Agregado ${pais}`);
    callback();
}

function mostrarPaises () {
    console.log(paises);
    
}

function IniciarCallBackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('mexico', mostrarPaises);
            setTimeout(() => {
                nuevoPais('colombia', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

IniciarCallBackHell();