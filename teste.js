function criarItem (tarefa){
    const item = document.createElement('li');
    item.classList.add("todo__item");
    item.innerHTML = `<input type="checkbox">
    <li>${tarefa}</li>
    <button><img src="delete.ico"></button>`

    document.getElementById('todoList').appendChild(item)
}

function limparTarefa(){
    const todoList = document.getElementById('totoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}

function atualizar (){
    limparTarefa();
    banco.forEach(item => criarItem (item.tarefa))
}
function insereItem(evento){
    const tecla = evento.key;
    const texto = evento.target.value
    console.log (tecla)
   if(tecla === 'Enter'){
        banco.push({texto})
        atualizar();
      evento.target.value = '';
    }
}

document.getElementById('newItem').addEventListener('keypress', insereItem)