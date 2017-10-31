import angular from 'angular';

let mainModule = angular.module('app.main', []);

import AppHeader from './header.component';
mainModule.component('appHeader', AppHeader);

export default mainModule;
