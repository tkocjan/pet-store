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
				$scope.pet.url = $scope.upload.url;
				$scope.pet.id = response.data;
				action($scope.pet);
				$modalInstance.close();
			});
	};

	$scope.handleError = function (response) {
		$scope.errorHandler.serverErrors = response;
	};
});