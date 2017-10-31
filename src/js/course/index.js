import angular from 'angular';
let courseModule = angular.module('app.course', []);
import courseConfig from './course.config';
courseModule.config(courseConfig);

import courseCtrl from './course.controller';
courseModule.controller('courseCtrl', courseCtrl);


export default courseModule;
