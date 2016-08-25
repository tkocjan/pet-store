'use strict';

TOA.controller('GenericModalController', function ($scope, $modalInstance, title, message, action, actionButtonText,
                                                   petService) {
	$scope.message = message;
	$scope.actionButtonText = actionButtonText;
	$scope.title = title;
	$scope.errorHandler = {};

	$scope.pet = {};

	// default call-back functions
	$scope.finished = function () {
		$modalInstance.close();
	};

	$scope.performAction = function () {
		petService.create($scope.pet)
			.then(function () {
				$modalInstance.close();
			});
	};

	$scope.handleError = function (response) {
		$scope.errorHandler.serverErrors = response;
	};

});