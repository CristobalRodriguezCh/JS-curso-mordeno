
function colorear(){
    var itemsInpares = document.querySelectorAll('li:nth-child(odd')
    var itemsPares = document.querySelectorAll('li:nth-child(even')
    for (let index = 0; index < itemsInpares.length; index++) {
        // itemsInpares[index].style.backgroundColor='#ccc'
        // itemsPares[index].style.backgroundColor='#f4f4f4'
    }
}
// seccion para agregar

var formAddList = document.getElementById("formAddList");
var items = document.getElementById("items")

formAddList.addEventListener('submit',addItems);



function addItems(e){
    e.preventDefault();//esto cancela el evento si este es cancelable y permite llamar
    //nuevamente el evento.

    var newItem = document.getElementById("item").value;
    // console.log(newItem);

    var li = document.createElement("li");
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem))
   

    var btnDelete = document.createElement("button")
    btnDelete.className = 'btn btn-danger btn-sm float-right eliminar'
    btnDelete.appendChild(document.createTextNode("x"))
    li.appendChild(btnDelete)

    items.appendChild(li)

    colorear()
}

//funcion para eliminar items de la lista
items.addEventListener('click',deleteItem);

function deleteItem(e){
    
    if(e.target.classList.contains("eliminar")){
        if (confirm("Esta seguro que desea eliminar el elemento")) {
            var li = e.target.parentElement;
            items.removeChild(li)
        } 
    }
    
}

// buscador de productos

var filtro = document.getElementById("filtro");

filtro.addEventListener('keyup',filtrarLista)

function filtrarLista(e) {
    var text = e.target.value.toLowerCase();
    var busqueda = items.getElementsByTagName('li') 
    
    Array.from(busqueda).forEach(function (item){// para convertir de lista a array y poder recorrerlo
        var itemText = item.firstChild.textContent;  //se selecciona el primer hijo dado que este tiene dos
        
        if(itemText.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
            console.log(item);
        }else{
            item.style.display = 'none'
        }
    })

    
}
