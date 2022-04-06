/// sprid opereitor

function suma(a,b,c,d) {
    return a+b+c+d
}

//es-5
var ope1 = suma(10,20,30,40)

console.log(ope1);

//es-6

var valores = [40,50,50,30]
const ope2 = suma(...valores)
console.log(ope2);


const rh = ['pedro','andres','keyla']
const constabilidad = ['julio','ana']

const empresa=[...rh,...constabilidad]
console.log(empresa);