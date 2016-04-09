(function() {
  'use strict';

  angular
    .module('school')
    .controller('ClassesController', ClassesController);

  /** @ngInject */
  function ClassesController($timeout, webDevTec, toastr, $resource, $window) {
    var vm = this;
    var classResource = $resource('http://localhost:3000/api/v1/klasses/:classId?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P');
    vm.getClasses = function() {
      vm.classResponse = classResource.get();
      console.log(vm.classResponse);
    }();

    vm.addClass = function() {
      var addClassResource = $resource('http://localhost:3000/api/v1/klasses?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P');
      vm.addClassResponse = addClassResource.get();
    }();

    vm.deleteClass = function(classes) {
      console.log("delete");
      console.log(classes);
      classResource.delete({classId:classes.id,name:classes.name});
      $window.location.href = '/';
    }
  }
})();
