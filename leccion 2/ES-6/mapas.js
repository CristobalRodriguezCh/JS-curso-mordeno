// //  ------------------Mapas -------------
// un mapa es una estructura de datos que funciona 
// mediante clave y valor
const datos = new Map();

datos.set('nombre','elver')
datos.set('telefono',321123)
datos.set(2,'@gmail.com')
datos.set(5,'@gmail.com')
console.log(datos.get('nombre'));
console.log(datos.size);

datos.delete(5);//eleimina un elemento especifico
// datos.clear();//elimina todo
console.log(datos.size);// trae el tamaño del mapa 

datos.forEach((value,key)=>{
    console.log(`clave: ${key} valor: ${value}`);
})