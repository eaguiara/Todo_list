


 //buscando dentro da div app a ul
var listaElement = document.querySelector('#app ul');

var inputElement =document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];


function renderTodos(){

listaElement.innerHTML ='';

    for(todo of todos){
        console.log(todo);
      
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#;');

        //indexOf descobre a posicao
        var posicao = todos.indexOf(todo);

        linkElement.setAttribute('onclick','deletartodo('+posicao+')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listaElement.appendChild(todoElement);
    }

}

renderTodos();

function adicionarTodo(){

    if(inputElement.value ==''){
        alert("Digite alguma coisa");
        return false;
    }else{

var todoText = inputElement.value;
todos.push(todoText);
inputElement.value = '';
renderTodos();
salvarDados();
 }
}

buttonElement.onclick = adicionarTodo;

function deletartodo(posicao){
    //splice remove algo da lista e passando a popsicao e o item do array 
  todos.splice(posicao, 1);
  renderTodos();  
  salvarDados();
}

function salvarDados(){
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}

 
 