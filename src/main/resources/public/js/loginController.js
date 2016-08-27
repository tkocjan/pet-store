TOA.controller('LoginController', function ($scope, $location, authService, $http, $rootScope) {


	$scope.tab = function (route) {
		return $route.current && route === $route.current.controller;
	};

	var authenticate = function (credentials, callback) {
		var fd = new FormData();
		fd.append('username', credentials.username);
		fd.append('password', credentials.password);

		$http({
			url: '/login',
			method: 'POST',
			headers: {'Content-Type': undefined},
			data: fd
		}).then(function (response) {
			console.log(response);
			$rootScope.authenticated = true;
			callback && callback($rootScope.authenticated);
		}, function () {
			$rootScope.authenticated = false;
			callback && callback(false);
		});

	}

	$scope.credentials = {};
	$scope.login = function () {
		authenticate($scope.credentials, function (authenticated) {
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