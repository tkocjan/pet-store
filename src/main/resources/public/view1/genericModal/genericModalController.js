'use strict';

TOA.controller('GenericModalController', function ($scope, $modalInstance, title, message, action, actionButtonText,
                                                   petService) {
	$scope.message = message;
	$scope.actionButtonText = actionButtonText;
	$scope.title = title;
	$scope.errorHandler = {};

	$scope.pet = {};
	$scope.upload = {};

	// default call-back functions
	$scope.finished = function () {
		$modalInstance.close();
	};

	$scope.performAction = function () {
		console.log($scope.upload.csvFile);
		petService.create($scope.pet, $scope.upload.csvFile)
			.then(function () {
				$modalInstance.close();
			});
	};

	$scope.handleError = function (response) {
		$scope.errorHandler.serverErrors = response;
	};

});