'use strict';

TOA.factory('authService', function ($http) {
	return {

		login: function (username, password) {
			return $http({
				url: 'login',
				method: 'POST',
				data: {username: username, password: password}
			});
		}
	};
});