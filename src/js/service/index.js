import angular from 'angular';

let servicesModule = angular.module('app.service', []);
 import CourseService from './course.service';
 servicesModule.service('CourseService', CourseService);
export default servicesModule;
