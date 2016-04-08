(function() {
  'use strict';

  angular
    .module('school')
    .controller('StudentsController', StudentsController);

  /** @ngInject */
  function StudentsController($resource, $stateParams) {
    var vm = this;

    vm.getStudents = function() {
      var classId = $stateParams.klass_id;
      var sectionId = $stateParams.id;
      console.log(classId);
      console.log(sectionId);
      var sectionResource = $resource('http://localhost:3000/api/v1/klasses/'+classId+'/sections/'+sectionId+'/students?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P');
      vm.studentResponse = studentResource.get();
    }();

  }
})();
