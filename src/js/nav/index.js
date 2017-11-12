import angular from 'angular';

let navigationModule = angular.module('app.nav', []);

import navigationConfig from './navigation.config';
navigationModule.config(navigationConfig);

import navigationComp from './navigation.component';
navigationModule.component('navigationComp', navigationComp);


export default navigationModule;
