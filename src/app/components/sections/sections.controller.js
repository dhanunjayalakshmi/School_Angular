(function() {
  'use strict';

  angular
    .module('school')
    .controller('SectionsController', SectionsController);

  /** @ngInject */
  function SectionsController($resource, $stateParams) {
    var vm = this;

    vm.getSections = function() {
      var classId = $stateParams.id;
      console.log(classId);
      var sectionResource = $resource('http://localhost:3000/api/v1/klasses/'+classId+'/sections?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P');
      vm.sectionResponse = sectionResource.get();
    }();

  }
})();
