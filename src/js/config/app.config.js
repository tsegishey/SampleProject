function AppConfig($httpProvider, $stateProvider, $urlRouterProvider) {
  'ngInject';
 
  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'main/app-view.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
