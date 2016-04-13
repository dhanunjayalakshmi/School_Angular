(function() {
  'use strict';

  angular
    .module('school')
    .controller('SectionsController', SectionsController);

  /** @ngInject */
  function SectionsController($resource, $stateParams) {
    var vm = this;

    var sectionResource = $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P', {}, { 'update': {method: "PUT"}});

    vm.getSections = function() {
      var classId = $stateParams.id
      vm.sectionResponse = sectionResource.get({classId:  classId});
      console.log(vm.sectionResponse);
    }();

    vm.addSection = function(name) {
      console.log("Add");
      console.log(name);
      sectionResource.save({name:name});
      $window.location.href = '/';
    }

    vm.editSection = function(sections) {
      console.log("Edit");
      // console.log(classes.name);
      // console.log(classes.id);
      // vm.gotClass = classes.name;
      // vm.classId = classes.id;
      vm.sections = sections;
      // console.log(vm.gotClass);
      $('#editModal').modal('show');
    }

    vm.updateSection = function(sections, name) {
      $('#editModal').modal('hide');
      console.log("Update");
      // console.log(classes.id);
      // console.log(name);
      sectionResource.update({classId: sections.klass_id, sectionId: sections.id, name: name}, sections);
      // $window.location.href = '/';
    }

    vm.deleteSection = function(sections) {
      console.log("delete");
      console.log(sections);
      // classId = sections.klass_id
      sectionResource.delete({classId: sections.klass_id, sectionId:sections.id, name:sections.name});
      // $window.location.href = '/classes/:classId/sections';
    }

  }
})();
