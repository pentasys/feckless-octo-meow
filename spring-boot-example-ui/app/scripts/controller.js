app.controller("ctrl", ["$scope", "$location", "restService", function ($scope, $location, restService) {
    "use strict";

    $scope.responseData = "no data";

    $scope.onLoad = function() {
        restService.load("http://" + $location.host() + ":8080/info").then(function(data) {
            $scope.responseData = JSON.stringify(data, null, '    ');
        });
    };
}]);
