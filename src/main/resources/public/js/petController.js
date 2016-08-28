'use strict';

TOA.controller('PetController', function ($scope, $uibModal, petService, $location, authService, $q) {
	$scope.PET_TYPES = Object.freeze(
		{
			'DOG': 'Dog',
			'CAT': 'Cat',
			'HAMSTER': 'Hamster'
		});

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

	var handleError = function (response) {
		$scope.serverErrors = response.data;
	};

	$scope.add = function () {
		$scope.pet = {};
		$scope.upload = {};
		$scope.serverErrors = {};

		$scope.performAction = function () {
			petService.create($scope.pet, $scope.upload.csvFile)
				.then(function (response) {
					$scope.pet.url = $scope.upload.url;
					$scope.pet.id = response.data;
					$scope.pets.push($scope.pet);
					$scope.modalInstance.close();
				}, handleError);
		};

		$scope.modalInstance = $uibModal.open({
			templateUrl: '../templates/addPetModal.html',
			windowClass: 'settings-modal',
			scope: $scope
		});

		$scope.$on('$destroy', function () {
			try {
				$scope.modalInstance.close();
			} catch (e) {
			}
		});

		$scope.handleError = function (response) {
			$scope.errorHandler.serverErrors = response;
		};
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