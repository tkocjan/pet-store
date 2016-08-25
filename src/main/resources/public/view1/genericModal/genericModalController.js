'use strict';

TOA.controller('GenericModalController', function ($scope, $modalInstance, title, message, action, actionButtonText) {
	$scope.message = message;
	$scope.actionButtonText = actionButtonText;
	$scope.title = title;
	$scope.errorHandler = {};

	// default call-back functions
	$scope.finished = function () {
		$modalInstance.close();
	};

	$scope.performAction = function () {
		action().then(function () {
			$modalInstance.close();
		});
	};

	$scope.handleError = function (response) {
		$scope.errorHandler.serverErrors = response;
	};

});