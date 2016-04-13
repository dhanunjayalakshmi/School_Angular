(function() {
  'use strict';

  angular
    .module('school')
    .controller('ClassesController', ClassesController);

  /** @ngInject */
  function ClassesController($timeout, webDevTec, toastr, $resource, $window) {
    var vm = this;
    var classResource = $resource('http://localhost:3000/api/v1/klasses/:classId?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P',
       {}, { 'update': {method: "PUT"}});
       
    vm.getClasses = function() {
      vm.classResponse = classResource.get();
      console.log(vm.classResponse);
    }();

    vm.addClass = function(name) {
      console.log("Add");
      console.log(name);
      classResource.save({name:name});
      $window.location.href = '/';
    }

    vm.editClass = function(classes) {
      console.log("Edit");
      // console.log(classes.name);
      // console.log(classes.id);
      // vm.gotClass = classes.name;
      // vm.classId = classes.id;
      vm.classes = classes;
      // console.log(vm.gotClass);
      $('#editModal').modal('show');
    }

    vm.updateClass = function(classes, name) {
      $('#editModal').modal('hide');
      console.log("Update");
      // console.log(classes.id);
      // console.log(name);
      classResource.update({classId: classes.id, name: name}, classes);
      // $window.location.href = '/';
    }

    vm.deleteClass = function(classes) {
      console.log("delete");
      console.log(classes);
      classResource.delete({classId:classes.id, name:classes.name});
      $window.location.href = '/';
    }
  }
})();
