(function() {
  'use strict';

  angular
    .module('school')
    .controller('SectionsController', SectionsController);

  /** @ngInject */
  function SectionsController($resource, $stateParams, $window) {
    var vm = this;
    var classId = $stateParams.id;

    var sectionResource = $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P', {classId: classId}, { 'update': {method: "PUT"}});

    vm.getSections = function() {
      vm.sectionResponse = sectionResource.get();
      console.log(vm.sectionResponse);
    }();

    vm.addSection = function(name) {
      console.log("Add");
      console.log(name);
      console.log(classId);
      sectionResource.save({name: name});
      $window.location.href = '/';
    }

    vm.editSection = function(sections) {
      console.log("Edit");
      vm.sections = sections;
      console.log(vm.sections);
      $('#editModal').modal('show');
    }

    vm.updateSection = function(sections, name) {
      $('#editModal').modal('hide');
      console.log("Update");
      sectionResource.update({sectionId: sections.id, name: name}, sections);
    }

    vm.deleteSection = function(sections) {
      console.log("delete");
      console.log(sections);
      classId = sections.klass_id
      sectionResource.delete({classId: sections.klass_id, sectionId:sections.id, name:sections.name});
      $window.location.href = '/';
    }

  }
})();
