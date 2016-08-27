'use strict';

TOA.controller('PetController', function ($scope, $modal, petService, $location, authService) {
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

	$scope.delete = function (pet) {
		petService.delete(pet.id).then(function (response) {
			$scope.pets = _.without($scope.pets, pet)
		});
	}

	$scope.add = function () {
		var modalInstance = $modal.open({
			templateUrl: '../templates/addPetModal.html',
			controller: 'AddPetModalController',
			windowClass: 'settings-modal',
			resolve: {
				action: function () {
					return function (pet) {
						$scope.pets.push(pet)
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

	$scope.hasPermission = function (permission) {
		if (!authService.currentUser()) {
			return false;
		}

		return authService.currentUser().authorities.indexOf(permission) > -1;
	}

	$scope.signedIn = function () {
		return authService.currentUser();
	}
});