//composcition

const obtenerNombre = info =>({
    mostrarNombre() {
        console.log(`nombre: ${info.nombre}`);
        
    }
});


const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardar email en: ${info.nombre}`);
        info.email = email;
        
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
        
    }
})

function Cliente(nombre , email, empresa) {

    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmpresa(info)
    )

}

function Empleado(nombre, email, puesto) {
    
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        agregarEmail(info)
    )
}

const cliente = Cliente('David', null, 'meave');

cliente.mostrarNombre();

const empleado = Empleado('Pedro', null, 'programador');
empleado.mostrarNombre();
