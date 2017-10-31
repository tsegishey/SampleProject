class courseCtrl {
  constructor($state,CourseService,$q) {
    'ngInject';
    this._CourseService=CourseService;
    this.ItemsDone=[];
    this.newarray= [];
    this.activate();             
                  
  }
  activate(){
    this._CourseService.courseList().then(res => {
      console.log(res);
      this.ItemsDone =JSON.parse(JSON.stringify(res.data)).ItemsDone;
    });
  }

  onchange(item,checkedornot)
  {
   if(checkedornot){
    this.newarray.push(item);
   }
   else
   {
    let index =this.newarray.indexOf(item);
    this.newarray.splice(index, 1);
   }

    }
     
}

export default courseCtrl;
