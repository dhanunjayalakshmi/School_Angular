(function() {
  'use strict';

  angular
    .module('school')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $resource) {
    var vm = this;

    vm.getClasses = function() {
      var classResource = $resource('http://localhost:3000/api/v1/klasses?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P');
      // var classResource = $http('http://localhost:3000/api/v1/klasses?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P');

      vm.classResponse = classResource.get();
      // vm.classResponse.$promise.then(function(data){
      //   console.log('received data');
      //   console.log(data);
      // });
      // console.log(vm.classResponse);
    }();
  };
})();
