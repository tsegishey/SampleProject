import angular from 'angular';

let servicesModule = angular.module('app.service', []);
 import CourseService from './course.service';
 servicesModule.service('CourseService', CourseService);
 import Appservice from './app.service';
 servicesModule.service('Appservice', Appservice);
export default servicesModule;
