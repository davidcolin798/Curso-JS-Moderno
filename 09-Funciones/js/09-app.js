
//metodo de propiedad
const reproductor={
    reproducir: function(id){
        console.log(`reproduciendo cancion numero ${id}`);
    },
    pausar: function(id){
        console.log(`pausando cancion`);
    },
    borrar: function(id){
        console.log(`borrando cancion numero ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`creando playlist de ${nombre}`);
    },
    reproducirPlaylist: function(id, nombre){
        console.log(`reproduciendo cancion numero ${id} de la playlist ${nombre}`);
    }
}
reproductor.crearPlaylist('salsa');
