TOA.controller('LoginController', function ($scope, $location, authService, $http, $rootScope) {


	$scope.tab = function(route) {
		return $route.current && route === $route.current.controller;
	};

	var authenticate = function(credentials, callback) {

		var headers = credentials ? {
			authorization : "Basic "
			+ btoa(credentials.username + ":"
				+ credentials.password)
		} : {};

		$http.get('user', {
			headers : headers
		}).then(function(response) {
			if (response.data.name) {
				$rootScope.authenticated = true;
			} else {
				$rootScope.authenticated = false;
			}
			callback && callback($rootScope.authenticated);
		}, function() {
			$rootScope.authenticated = false;
			callback && callback(false);
		});

	}

	authenticate();

	$scope.credentials = {};
	$scope.login = function() {
		authenticate($scope.credentials, function(authenticated) {
			if (authenticated) {
				console.log("Login succeeded")
				$location.path("/pet-store");
				$scope.error = false;
				$rootScope.authenticated = true;
			} else {
				console.log("Login failed")
				$location.path("/login");
				$scope.error = true;
				$rootScope.authenticated = false;
			}
		})
	};

	// $scope.login = function () {
	// 	authService.login($scope.username, $scope.password)
	// 		.then(function (data) {
	// 			console.log("SUCESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
	// 			$location.path("/pet-store");
	// 		});
	// };
});