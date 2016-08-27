'use strict';

TOA.controller('PetController', function ($scope, $modal, petService, $location) {
	$scope.init = function () {
		$scope.pets = [];
		$scope.query = null;
		$scope.loadPets();
	}

	$scope.loadPets = function () {
		petService.getAll($scope.query)
			.then(function (response) {
				$scope.pets = response.data;
				console.log(response.data);
				$scope.dataRetrieved = true;
			});
	}

	$scope.delete = function (petId) {
		petService.delete(petId).then(function (response) {
			$scope.loadPets();
		});
	}

	$scope.add = function () {
		var modalInstance = $modal.open({
			templateUrl: '../templates/addPetModal.html',
			controller: 'AddPetModalController',
			windowClass: 'settings-modal',
			resolve: {
				action: function () {
					return function () {
						return $scope.loadPets();
					}
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

	$scope.$watch('query', function (newValue, oldValue) {
		if (oldValue != newValue) {
			$scope.loadPets();
		}
	});

	$scope.logout = function () {
		$location.path('/login');
	};
});