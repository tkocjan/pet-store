'use strict';

TOA.controller('AppController', function ($scope, $q, authService, $location, $rootScope) {

	$rootScope.$on("$routeChangeStart", function (event, next) {
		if (next.originalPath == '/login') {
			return;
		}

		if (!authService.currentUser() || !authService.currentUser().authenticated) {
			authService.currentUser = null;
			$location.url('/login');
		}
	});
});
