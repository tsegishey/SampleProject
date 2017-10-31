class HomeCtrl {
  constructor() {
    'ngInject';
    this.infoList=[];
    this.newtask="";
    
   
  }
//I'm pushing a new task to the task list
  addTask(task1) {
    if(task1!=""){
      this.infoList.push( task1);
    }
    else{
      return;
    }
    this.newtask="";

}
//I'm removing a task from the task list
removeTask(taskname){
  for(let i = 0; i < this.infoList.length; i++) {
      if(this.infoList[i] == taskname) {
          this.infoList.splice(i, 1);
          break;
      }
}
}
}




export default HomeCtrl;
