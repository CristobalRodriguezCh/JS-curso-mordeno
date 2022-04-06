const producto={
    nombre: 'tv',
}

producto.precio=12000
console.log(producto);
Object.seal(producto)//se sella el objeto permite actualizar pero no agregar nuevos atributos

//Object.Freeze(producto)//congela el objeto no permite actualizar los atributos del objeto 

//Object.isFrozen() permite saber si el objeto esta congelado o no 
//Object.isSealed() permite saber si el objeto esta sellado o no  
console.log(Object.isSealed(producto))



const nota1={
    n1:3,
    n2:4
}

const nota2={
    n3:5,
    n4:3
}


//unir dos objetos 
const resultado = Object.assign(nota1,nota2)
console.log(resultado)

const resultad01 = {...nota1,...nota2}
console.log(resultad01)

