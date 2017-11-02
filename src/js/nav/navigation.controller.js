class navigationCtrl {
  constructor(AppConstants) {
    'ngInject';
    this.appName = AppConstants.appName;
    this.postList=[];
      }
     

  submit(post){
    console.log(post);
    if(post!="" || post!=undefined ||post!=null ){
      this.postList.push(post);
          }
    else{
      return;
    }

  }
}


export default navigationCtrl;
