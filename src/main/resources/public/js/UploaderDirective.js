'use strict';

TOA.directive("uploader", [function () {
	return {
		scope: {
			uploader: "="
		},
		link: function (scope, element) {
			element.bind("change", function (changeEvent) {
				scope.uploader.csvFile = changeEvent.target.files[0];

				var reader = new FileReader();
				reader.onload = function (e) {
					scope.uploader.image = e.target.result;
					scope.$apply();
				};

				reader.readAsDataURL(scope.uploader.csvFile);
			});
		}
	}
}]);