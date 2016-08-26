'use strict';

TOA.controller('View1Ctrl', function ($scope, $modal, petService) {
	$scope.init = function () {
		$scope.pets = [];
		$scope.loadPets();
	}

	$scope.loadPets = function () {
		petService.getAll()
			.then(function (response) {
				$scope.pets = response.data;
				console.log(response.data);
				$scope.dataRetrieved = true;
			});
	}

	$scope.delete =function (petId) {
		petService.delete(petId).then(function (response) {
			$scope.loadPets();
		});
	}

	$scope.add = function () {
		var modalInstance = $modal.open({
			templateUrl: '../view1/genericModal/genericModal.html',
			controller: 'GenericModalController',
			windowClass: 'settings-modal',
			resolve: {
				title: function () {
					return 'page.timeOff.timeOffRequest.cancelTitle';
				},
				message: function () {
					return 'page.timeOff.modal.cancel.confirmationMessage';
				},
				action: function () {
					return function () {
						// return $scope.loadPets();
					}
				},
				actionButtonText: function () {
					return "page.timeOff.modal.cancel.cancel"
				}
			}
		});

		$scope.$on('$destroy', function () {
			try {
				modalInstance.close();
			} catch (e) {
			}
		});

		modalInstance.result.then(function () {
		});
	};
});