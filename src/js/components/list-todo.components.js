
class ListTodosctrl
{
  constructor() {
    'ngInject';
    
}
$onInit(){
  console.log('ListTodosctrl');
}
$onChanges(changes){
 console.log('ListTodosctrlchanges');
}
removeTask(taskname){
  for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i] == taskname) {
          this.todos.splice(i, 1);
          break;
      }
}
}

}

let ListTodos= {
  bindings: {
    todos: '='
  },
  templateUrl: 'components/list-todo.html',
  controller:ListTodosctrl
};

export default ListTodos;