
class ItemTodosctrl
{
  constructor(CourseService) {
    'ngInject';
   this._CourseService= CourseService;
   
      }
  $onInit(){
        this._CourseService.postItemList().then(res => {
          console.log(res.data.postListDone);
              this.items=res.data.postListDone;
          });
        
      }
}

let ItemTodos= {
  bindings: {
    items: '='
  },
  templateUrl: 'components/item-todo.html',
  controller:ItemTodosctrl
};

export default ItemTodos;