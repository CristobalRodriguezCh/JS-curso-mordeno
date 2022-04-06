// objetos literales 


var persona = {
    nombre:   'Cristóbal',
    apellido: 'Rodríguez',
    gustos:   ['juegos','la vida','ella'],
    yearN: 2000,
    calcuarEdad: function(){
        this.edad = 2021- this.yearN
    }
}
persona.calcuarEdad();
console.log(persona);