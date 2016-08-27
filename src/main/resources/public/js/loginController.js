TOA.controller('LoginController', function ($scope, $location, authService, $http, $rootScope) {

	$scope.login = function () {
		authService.login($scope.credentials)
			.then(function (data) {
				$rootScope.authenticated = data.authenticated;

				if ($rootScope.authenticated) {
					$location.path("/pet-store");
					$scope.error = false;
				} else {
					$location.path("/login");
					$scope.error = true;
				}

			}, function () {
				$location.path("/login");
				$scope.error = true;
				$rootScope.authenticated = false;
			});
	};
});