import angular from 'angular';

let componentsModule = angular.module('app.components', []);
 
import ListTodos from './list-todo.components';
componentsModule.component('listTodos', ListTodos);

import ItemTodos from './item-todo.components';
componentsModule.component('itemTodos', ItemTodos);

export default componentsModule;
