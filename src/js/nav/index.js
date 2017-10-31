import angular from 'angular';

let navigationModule = angular.module('app.nav', []);

import navigationConfig from './navigation.config';
navigationModule.config(navigationConfig);

import navigationCtrl from './navigation.controller';
navigationModule.controller('navigationCtrl', navigationCtrl);


export default navigationModule;
