export default class CourseService {
    constructor($http,$q) {
      'ngInject';
         this._$http = $http;
         this._$q=$q;
                     }

    courseList(){
        let promiseone=this._$http.get('mock.service.json');
                   return promiseone;  
                    }
    postItemList(){

        let promisetwo=this._$http.get('mock.service1.json');
        return promisetwo;
                    }
      }