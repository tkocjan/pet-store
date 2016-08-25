'use strict';

TOA.factory('petService', function ($http) {
	return {
		get: function (id) {
			return $http({
				url: '/pet' + id,
				method: 'GET'
			});
		},
		getAll: function () {
			return $http({
				url: '/pet/all',
				method: 'GET'
			});
		},
		create: function (pet) {
			return $http({
				url: '/pet',
				method: 'POST',
				data: pet
			});
		},
		delete: function (id) {
			return $http({
				url: '/pet/' + id,
				method: 'DELETE'
			});
		}
	}
});