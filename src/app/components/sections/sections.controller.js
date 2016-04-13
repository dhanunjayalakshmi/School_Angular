(function() {
  'use strict';

  angular
    .module('school')
    .controller('SectionsController', SectionsController);

  /** @ngInject */
  function SectionsController($resource, $stateParams) {
    var vm = this;

    vm.getSections = function() {
      var sectionResource = $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P', {}, { 'update': {method: "PUT"}});
      vm.sectionResponse = sectionResource.get();
    }();

    vm.addSection = function(name) {
      console.log("Add");
      console.log(name);
      classResource.save({name:name});
      $window.location.href = '/';
    }

    vm.editSection = function(classes) {
      console.log("Edit");
      // console.log(classes.name);
      // console.log(classes.id);
      // vm.gotClass = classes.name;
      // vm.classId = classes.id;
      vm.classes = classes;
      // console.log(vm.gotClass);
      $('#editModal').modal('show');
    }

    vm.updateSection = function(classes, name) {
      $('#editModal').modal('hide');
      console.log("Update");
      // console.log(classes.id);
      // console.log(name);
      classResource.update({classId: classes.id, name: name}, classes);
      // $window.location.href = '/';
    }

    vm.deleteSection = function(sections) {
      console.log("delete");
      console.log(sections);
      // classId = sections.klass_id
      // sectionResource.delete({classId: classId, sectionId:sections.id, name:sections.name});
      // $window.location.href = '/classes/:classId/sections';
    }

  }
})();
