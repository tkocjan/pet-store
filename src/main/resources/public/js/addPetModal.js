'use strict';

TOA.controller('AddPetModalController', function ($scope, $modalInstance, action) {
	$scope.pet = {};
	$scope.upload = {};

	$scope.finished = function () {
		$modalInstance.close();
	};

	$scope.performAction = function () {
		action($scope.pet, $scope.upload).then(function () {
			$modalInstance.close();
		});
	};

	$scope.handleError = function (response) {
		$scope.errorHandler.serverErrors = response;
	};
});