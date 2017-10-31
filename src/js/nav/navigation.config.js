function navigationConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.nav', {
    url: '/nav/:slug',
    controller: 'navigationCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'nav/navigation.html',
    title: 'navigation'
  });

};

export default navigationConfig;
