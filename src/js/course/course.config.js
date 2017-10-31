function courseConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.course', {
    url: '/course',
    controller: 'courseCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'course/course.html',
    titile:'Course'
    
  });

};

export default courseConfig;
