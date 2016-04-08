(function() {
  'use strict';

  angular
    .module('school')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('classes', {
        url: '/',
        templateUrl: 'app/components/classes/classes.html',
        controller: 'ClassesController',
        controllerAs: 'cc'
      })
      .state('sections', {
        url: '/classes/:id/sections',
        templateUrl: 'app/components/sections/sections.html',
        controller: 'SectionsController',
        controllerAs: 'sc'
      })
      .state('students', {
         url: '/classes/:klass_id/sections/:id/students',
         templateUrl: 'app/components/students/students.html',
         controller: 'StudentsController',
         controllerAs: 'st'
       })
  }

})();
