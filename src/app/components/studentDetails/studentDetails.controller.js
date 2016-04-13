(function() {
  'use strict';

  angular
    .module('school')
    .controller('StudentDetailsController', StudentDetailsController);

  /** @ngInject */
  function StudentDetailsController($resource, $stateParams, $window) {
    var vm = this;
    var classId = $stateParams.klass_id;
    var sectionId = $stateParams.section_id;
    var studentId = $stateParams.id;

    var studentResource = $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId/students/:studentId?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P',{classId:  classId, sectionId: sectionId, studentId: studentId}, { 'update': {method: "PUT"}});

    vm.getStudent = function() {
      console.log(classId);
      console.log(sectionId);
      console.log(studentId);
      vm.studentResponse = studentResource.get();
      console.log(vm.studentResponse);
    }();

    vm.editStudent = function(student) {
      console.log("Edit");
      vm.student = student;
      console.log(vm.student);
      $('#editModal').modal('show');
    }

    vm.updateStudent = function(student, name, rollnumber, fathername, gender, email, phone, dob, address, house) {
      $('#editModal').modal('hide');
      console.log("Update");
      studentResource.update({name: name, roll_number: rollnumber, fathers_name: fathername, gender: gender, email: email, phone: phone, dob: dob, address: address, house_id: house}, student);
    }

    vm.deleteStudent = function(student) {
      var del = confirm("Are you sure?");
      console.log("delete");
      console.log(student);
      if (del == true)
      {
        studentResource.delete({roll_number: student.roll_number});
        $window.location.href = '/';
      }
      else
      {

      }
    }


  }
})();
