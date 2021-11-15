
// retornar elementos get

const ulista = document.getElementById("ul");
const entrada = document.getElementById("entrada");
const botaoTarefa = document.getElementById("add");
const novaTarefa = document.getElementsByTagName("li");

// criando lista

//const lista = []




//main acao

botaoTarefa.setAttribute('onclick', 'entrada()');



// tratar dados vazio

function entrada(){
    
    if(entradaDado.value != " "){
        adicionar()
        
    }else{
        ulista.innerHTML = ' <li class = "waening-message">Por favor, digite um termo valido </li> '
   
    }
}

// adicionar lista tarefa

function adicionar() {
    
    const listaTarefa = document.createElement('li');
    listaTarefa.appendChild(document.createTextNode(entradaDado.value));
    ulista.appendChild(listaTarefa);

    entradaDado.value= "";

    const deleteBtn = document.createEvent("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    listaTarefa.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", excluir );

    //const addTarefa = entradaDado.value;
   /* if (entradaDado != " "){
    lista.push(addTarefa);
    entradaDado.value = '';/*/


    /*function comprido(){
        criarListaTarefa.classList.toggle("pronto");
    }

    criarListaTarefa.addEventListener("click" , comprido);
  
    }*/

}

function excluir(){

    listaTarefa
}



/*mostrar tarefa

function mostrar() {

    listaTarefa.value = ''

    for (tarefa of lista){

        const criarListaTarefa = document.createElement('li');
        const textTarefa = document.createTextNode(tarefa);

        criarListaTarefa.appendChild(textTarefa);
        listaTarefa.appendChild(criarListaTarefa);


    }
}*/
