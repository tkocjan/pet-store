'use strict';

TOA.controller('AddPetModalController', function ($scope, $modalInstance, action, petService) {
	$scope.pet = {};
	$scope.upload = {};

	$scope.finished = function () {
		$modalInstance.close();
	};

	$scope.performAction = function () {
		petService.create($scope.pet, $scope.upload.csvFile)
			.then(function (response) {
				action($scope.pet, $scope.upload.csvFile);
				$modalInstance.close();
			});
	};

	$scope.handleError = function (response) {
		$scope.errorHandler.serverErrors = response;
	};

});