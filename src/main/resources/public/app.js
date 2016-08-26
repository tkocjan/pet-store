'use strict';

angular.module('TOA', [
	'ngRoute',
	'ui.bootstrap'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/pet-store', {
		templateUrl: 'templates/petPage.html',
		controller: 'PetController',
		reloadOnSearch: false
	}).otherwise({
		redirectTo: '/pet-store'
	});
	;
}]);

var TOA = angular.module('TOA');
