class cliente {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostraInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo} `
    }
    static bienvenida(){
        return`bienvenido al cajero`
    }

}   



//herencia

class Empresa extends cliente{ //heredar con extends
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);//heredar de la clase cliente con super
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida(){
        return`bienvenido al cajero de la empresa`;
    }
}

const david = new cliente('david', 400);
console.log(david);
console.log(david.mostraInformacion());
console.log(Empresa.bienvenida());

