function navigationConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.nav', {
    url: '/nav/:slug',
    component: 'navigationcomp',
    templateUrl: 'nav/navigation.html',
    title: 'navigation'
  });

};

export default navigationConfig;
