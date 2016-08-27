'use strict';

TOA.directive("uploader", [function () {
	return {
		scope: {
			uploader: "="
		},
		link: function (scope, element) {
			element.bind("change", function (changeEvent) {
				scope.uploader.csvFile = changeEvent.target.files[0];
				scope.uploader.url = URL.createObjectURL(scope.uploader.csvFile);
				scope.$apply();
			});
		}
	}
}]);