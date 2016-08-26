'use strict';

TOA.directive("uploader", [function () {
    return {
        scope: {
        	uploader: "="
        },
        link: function (scope, element) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.uploader.csvFile = changeEvent.target.files[0];
                });
            });
        }
    }
}]);