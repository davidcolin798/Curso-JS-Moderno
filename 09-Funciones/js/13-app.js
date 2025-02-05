const reproductor={
    cancion:'',
    reproducir: (id) => console.log(`reproduciendo cancion numero ${id}`),
    pausar: (id) => console.log(`pausando cancion`),
    borrar: (id) => console.log(`borrando cancion numero ${id}`),
    crearPlaylist: (nombre) => console.log(`creando playlist de ${nombre}`),
    reproducirPlaylist: (id, nombre) => console.log(`reproduciendo cancion numero ${id} de la playlist ${nombre}`),

    set nuevaCancion (cancion){
        this.cancion = cancion;
        console.log(`Anadiendo ${this.cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}
reproductor.crearPlaylist('salsa');
reproductor.nuevaCancion = 'enter Sandman';
reproductor.obtenerCancion;