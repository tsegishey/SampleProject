class HomeCtrl {
  constructor() {
    'ngInject';
    console.log(this);
    this.infoList=[];
    this.newtask="";
    
   
  }
//I'm pushing a new task to the task list
  addTask(task1) {
    if(task1!==""){
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
      if(this.infoList[i] === taskname) {
          this.infoList.splice(i, 1);
          break;
      }
}
}
}
let homeComp= {
  bindings: {
  // postList: '<'
  },
  templateUrl: 'home/home-item.html',
  controller:HomeCtrl,
  controllerAs: '$ctrl'
  

};

export default homeComp;
