// declarando varibles

//ES-5
// var nombre = "cristobal"

// ES-6
// const name= "juan";
// let edad = 12

// template strings con es6

let nombre="Cristobal"
let apellido="Rodriguez"
const nacimiento =1990
const ciudad ="Barranquila"
function calcularEdad (year){
    return 2020 - year
}

console.log(nombre+ ' ' + apellido + ' , nacio en ' + ciudad , + ' '+ calcularEdad(nacimiento));

console.log(` ${nombre} ${apellido} , nacio en ${ciudad} y tiene ${calcularEdad(nacimiento)} años`);


// metodos para cadenas

let nombreCompleto = ` ${nombre} ${apellido}`
// console.log(nombreCompleto );
// console.log(` ${nombreCompleto} `.repeat(5));// repite el nombre n veces
// console.log(nombreCompleto.includes('bal'));// busca si esta incluida en la cadena es sencible a espacios
// console.log(nombreCompleto.startsWith('bal'));// busca como comienza la cadena es sencible a espacios
// console.log(nombreCompleto.endsWith('guez'));// busca como termina la cadena es sencble a espacios



// funciones flechas

const years = [2000,2005,2000,2012]

//es5
var edad5 = years.map(function(el) {
    return( 2022 - el);
})

console.log(edad5);

//ES-6 ---- funciones flechas / arrow function

let edad6 = years.map((el,index) => `Edad ${index + 1} - ${2022 - el}`);
console.log(edad6);

edad62 = years.map(
    (el,index)=>{
      const yearActual = new Date().getFullYear();
      const edad = el - yearActual;
      return `*Edad ${index + 1} - ${edad}`
    }
)

console.log(edad6);

const cuadrado = (num) =>{
    return num * num;
};

console.log(cuadrado(5));

// arrow function con json

const personas = [
    {
        nombre:'Cristobal',
        edad: 20
    },
    {
        nombre:'Antonio',
        edad: 25
    },
    {
        nombre:'Rodriguez',
        edad:24
    }
];

// const menores25 = personas.filter(function(persona){
//     return persona.edad < 25 
// }
// )

const menores25 = personas.filter(persona =>{
    return persona.edad < 25 
}
)
console.log(menores25);


/// destrunccion o destructuting

// es-5

var Datos = ['Cristobal','25']
var name5 = Datos[0]
var edad5 = Datos[1]

// ES-6
    var [nombre6, eda6] = ['Aristoteles', 40]
    console.log(nombre6, eda6);

    const persona = {
        Nombre4: 'Carlos',
        Edad4:40
    }
    const {Nombre4,Edad4}= persona;
    console.log(Nombre4,Edad4);

    const {Nombre4 : n,Edad4:e}= persona;
    console.log(n,e);

    const calcMayoriaEdad = (year) =>{
        const edad = new Date().getFullYear() -year
        const esMayor = edad >= 18 ? 'si' : 'no';
        return [edad , esMayor]
    }

    const [edad7,esMayor]= calcMayoriaEdad(2007)
    console.log(`la edad es ${edad7}, ¿Es mayor de edad? ${esMayor}`);

