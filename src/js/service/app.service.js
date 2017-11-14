export default class Appservice {
    constructor() {
      'ngInject';
    this.pageTitle='';
                         }
    setPageTitle(title){
      console.log(title);
    if (title) {
        this.pageTitle += title;
        this.pageTitle += ' \u2014 ';
      }
    }
            
                   
    
      }