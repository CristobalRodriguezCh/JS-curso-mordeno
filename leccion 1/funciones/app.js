function calcularAñosPension(yearN){
    var edadj= 65
    var edad = 2021 -yearN

    return 'edad '+( edad)+' Le faltan para pensionarse '+(edadj - edad)

}

var edad = calcularAñosPension(1976);

var suma = function (n=0){// funcion en expresion
    return n
}

console.log(suma());