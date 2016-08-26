'use strict';

TOA.factory('petService', function ($http) {
	return {
		get: function (id) {
			return $http({
				url: '/pet/' + id,
				method: 'GET'
			});
		},
		getAll: function (query) {
			return $http({
				url: '/pet/all',
				method: 'GET',
				params: {query: query},
			});
		},
		create: function (pet, image) {
			var fd = new FormData();
			fd.append('pet', JSON.stringify(pet));
			fd.append('image', image);

			return $http({
				url: '/pet',
				method: 'POST',
				headers: {'Content-Type': undefined},
				data: fd
				,
				transformRequest: function (data, headersGetterFunction) {
					return data;
				}
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