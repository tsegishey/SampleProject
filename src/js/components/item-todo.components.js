
class ItemTodosctrl
{
  constructor() {
    'ngInject';
    
      }
 
  onEditPost(post){
   this.onEdit=post;
   this.navigationCtrl.updatePage(this.onEdit,);
   
  }
 }

let ItemTodos= {
  bindings: {
    items: '<',
    onEdit:'<'
  },
  templateUrl: 'components/item-todo.html',
  controller:ItemTodosctrl,
  require:{
    navigationCtrl:'^navigationComp'
  }
};

export default ItemTodos;