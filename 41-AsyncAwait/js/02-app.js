//conocer el asinc away

function descargarClientes(){ 
    return new Promise((resolve, reject) =>{
        const error = false;
    
        setTimeout(() => {
            if (!error) {
                resolve('el listado de clietes se descargo')
            }else{
                reject('Error de conexion')
            }
        }, 2000);
    })
}

async function ejecutar() {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();
        console.log(2 + 2);
        console.log(respuesta);
        
    } catch (error) {
        console.log(error);
        
    }
}

ejecutar();