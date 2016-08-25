'use strict';

TOA.controller('View1Ctrl', function($scope, $modal, petService) {

  $scope.init = function() {
    loadPets();
  }

  $scope.loadPets = function () {
    $scope.pets = petService.getAll();
  }

  $scope.add = function() {
    var modalInstance = $modal.open({
      templateUrl: '../view1/genericModal/genericModal.html',
      controller: 'GenericModalController',
      windowClass: 'settings-modal',
      resolve: {
        title: function () { return 'page.timeOff.timeOffRequest.cancelTitle'; },
        message: function () { return 'page.timeOff.modal.cancel.confirmationMessage'; },
        action: function () { return function() {
          return timeOffService.cancelRequest(request.id) } },
        actionButtonText: function () { return "page.timeOff.modal.cancel.cancel" }
      }
    });

    $scope.$on('$destroy', function () {
      try {
        modalInstance.close();
      } catch (e) { }
    });

    modalInstance.result.then(function () {
      $scope.loadPets();
    });
  };
});