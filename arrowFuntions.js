const Reproductor = {
    canciones:[],

    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:()=>{
        console.log("Pausando .....")
    },

    get veTodasCanciones(){
        this.canciones.forEach( (cancion1)=>{
            console.log(cancion1);
        }

        )
    },

    set ingresarCanciones(cancion){
        this.canciones.push(cancion)
    }

}

Reproductor.reproducir(4)
Reproductor.pausar()

Reproductor.ingresarCanciones="Dame las tapas que yo las necesito"
Reproductor.ingresarCanciones="La gomita del perreo"
Reproductor.ingresarCanciones="Gotas de lluvia"
Reproductor.veTodasCanciones





/*
arrow funtions
son relativamente nuevas y son una nueva forma de ver las funciones
su sintaxis es mas reduccida  y muy util
*/
