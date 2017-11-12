
class ItemTodosctrl
{
  constructor(CourseService) {
    'ngInject';
  // this._CourseService= CourseService;
   
      }
  // $onInit(){
  //       this._CourseService.postItemList().then(res => {
  //         console.log(res.data.postListDone);
  //             this.items=res.data.postListDone;
  //         });
        
  //     }
  onEditPost(post){
   this.onEdit=post;
   this.navigationCtrl.updatePage(this.onEdit,);
   console.log(this.onEdit);
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