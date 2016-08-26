'use strict';

angular.module('TOA', [
	'ngRoute',
	'ui.bootstrap'
]).config(function ($routeProvider, $httpProvider) {
	$routeProvider.when('/pet-store', {
		templateUrl: '../templates/petPage.html',
		controller: 'PetController',
		reloadOnSearch: false
	}).when('/login', {
		templateUrl: '../templates/login.html',
		controller: 'LoginController',
	}).otherwise('/login');
});

var TOA = angular.module('TOA');
