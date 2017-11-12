 class navigationCtrl {
  constructor(AppConstants,CourseService) {
    'ngInject';
    console.log(this);
    this.appName = AppConstants.appName;
    this.postList=[];
    this.editItem="";
    this.textdata="";
    this._CourseService= CourseService;
  }
    $onInit(){
      this._CourseService.postItemList().then(res => {
        console.log(res.data.postListDone);
            this.postList=res.data.postListDone;
        });
      
    }
    $onChange(){
      console.log('onchange Nav');
    }
        

  submit(post){
    if(post!=="" || post!==undefined ||post!==null ){
      console.log(post);
      this.postList.push(post);
          }
    else{
      return;
    }
  }
  updatePage(post){
      this.editItem=post;
      this.textdata=post;
    }

  update(post)
  {
   let index= this.postList.indexOf(this.editItem);
   this.postList[index]=post;
   console.log(index);
   this.textdata="";
   this.editItem="";
  }
     
}
 let navigationComp= {
   bindings: {
    postList: '<'
   },
   templateUrl: 'nav/nav-item.html',
   controller:navigationCtrl,
   controllerAs: '$ctrl'
   

 };

export default navigationComp;
