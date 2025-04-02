class cliente {
    #nombre;
    setNombnre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }

}   

const david = new cliente();
david.setNombnre('David');
console.log(david.getNombre());


