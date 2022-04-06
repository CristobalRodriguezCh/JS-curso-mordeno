var frutas = ['pera','manzana','uvas']
console.log(frutas);

console.log('\n slice :'+frutas.slice(1,2));

console.log('\n for let ');
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

frutas.push('naranja')
console.log('\n forEach function');
frutas.forEach(function(fruta , indice,array){
     console.log(indice+'.'+fruta);
})

frutas.pop()
frutas.shift()

console.log('\n forEach =>');
frutas.forEach(fruta =>{
    console.log(fruta);
})



console.log(`\n indexOf ${frutas.indexOf('uvas')}`);


