class cliente {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostraInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo} `
    }

}   

const david = new cliente('david', 400);
console.log(david);
console.log(david.mostraInformacion());

