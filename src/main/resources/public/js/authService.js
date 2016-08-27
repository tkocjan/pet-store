'use strict';

TOA.factory('authService', function ($http) {
	return {

		login: function (credentials) {
			var fd = new FormData();
			fd.append('username', credentials.username);
			fd.append('password', credentials.password);

			return $http({
				url: '/login',
				method: 'POST',
				headers: {'Content-Type': undefined},
				data: fd
			})
		}
	};
});