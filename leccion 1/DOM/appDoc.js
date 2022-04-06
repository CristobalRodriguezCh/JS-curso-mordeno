/*
//console.dir(document)// muestra en consola todo el contenido del doc
//console.log(document.URL)// devulve la url del sitio
//console.log(document.title);
//document.title='Manipualcion del DOM'
//console.log(document.head);
//console.log(document.all);
//console.log(document.getElementById('id'));

var header = document.getElementById('header-title')
header.textContent='hola'
header.innerText='Lista de items'
header.innerHTML='<h3>Lista de items</h3>'


var header= document.querySelector('#main-header');
header.style.border='solid 10px #ccc'

var submit = document.querySelector('input[type="submit"]')
submit.value="enviar"

var item = document.querySelectorAll('.list-group-item')
item[2].style.color='blue'

var item = document.querySelector('.list-group-item')
item.style.color='red'

var itemsInpares = document.querySelectorAll('li:nth-child(odd')
var itemsPares = document.querySelectorAll('li:nth-child(even')
for (let index = 0; index < itemsInpares.length; index++) {
    itemsInpares[index].style.backgroundColor='#ccc'
    itemsPares[index].style.backgroundColor='#f4f4f4'
}


var itemsList = document.querySelector('#items')
console.log(items.parentNode);

var itemsList = document.querySelector('#items')

//childNode nodos hijos
console.log(itemsList.childNodes);

//children
console.log(itemsList.children);

//frist Child
console.log(itemsList.firstChild);

//last child
console.log(itemsList.lastChild);



*/
