'use strict';

// Declare app level module which depends on views, and components
angular.module('TOA', [
	'ngRoute',
	'ui.bootstrap'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	}).otherwise({
		redirectTo: '/view1'
	});;
}]);

var TOA = angular.module('TOA');
