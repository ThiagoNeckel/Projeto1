    const ul = document.getElementById("ul");
    const input = document.getElementById("entrada");
    
   
    const tarefas = JSON.parse(localStorage.getItem('list')) || [] 
    
    
    

    function validaEntrada(){
        console.log(input.value)
        if (input.value != ""){
            addTarefa();
        
        }
        else{
            alert("Digite uma Entrada!!!")
        }
    }


function apresentarTarefa(){
    ul.innerHTML = ''
   
    for(texto of tarefas){
        
        var novatarefa = document.createElement('li');
        novatarefa.appendChild(document.createTextNode(texto));
        
        console.log(novatarefa)
        const pos = tarefas.indexOf(texto)
        ul.appendChild(novatarefa);
        novatarefa.innerHTML = `<li><input type="checkbox"> 
        ${texto} <button id="del" onclick ="removeTarefa(${pos})">
        <img src="lixo-removebg-preview.png"></button></li>`
        
        const deleteBtn = document.getElementById("del");
        
        
        
        
        console.log(pos)
        
        deleteBtn.value = ''
        
        
    } function risco(){ 

        novatarefa.classList.toggle("feito");
    }

   novatarefa.addEventListener("click", risco);
    
    
   
}

apresentarTarefa()
function addTarefa(){
   
    var tarefa = input.value;

    tarefas.push(tarefa);
  
    input.value = ''
    apresentarTarefa()
    salvar()
  
}

function removeTarefa (pos) {
    tarefas.splice (pos, 1)
    apresentarTarefa()
    salvar()

}


function salvar(){
    localStorage.setItem('list', JSON.stringify(tarefas));
}

/*function criarItem (tarefa){
    const item = document.createElement('li');
    item.classList.add("novo-item");
    item.innerHTML = `<input type="checkbox">
    <li>${tarefa}</li>
    <button><img src="delete.ico"></button>`

    ul.appendChild(item);
    apresentarTarefa()
}*/

