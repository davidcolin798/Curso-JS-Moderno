
function descargarClientes() {
    return new Promise(resolve =>{
        console.log('descargando Cientes ....');
        setTimeout(() => {
            resolve('los Clientes fueron descargados')
        }, 2000);
    })
}

function descargarPedidos() {
    return new Promise(resolve=>{
        console.log('descargarndo pedidos ....');
        setTimeout(() => {
            resolve('los pedidos fueron descargados');
        }, 3000);       
    })
}

const app = async () =>{
    try {
        const respuesta = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
        
    } catch (error) {
        console.log(error);
    }
}