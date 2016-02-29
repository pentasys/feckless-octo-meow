app.controller("ctrl", ["$scope", "$location", "restService", function ($scope, $location, restService) {
    "use strict";

    $scope.displayInfo = false;
    $scope.serverInfo = '';

    $scope.apiDoc = "http://" + $location.host() + ":8080/swagger-ui.html";
    $scope.loadAppInfo = function() {
        restService.load("http://" + $location.host() + ":8080/info").then(function(data) {
            $scope.serverInfo = angular.fromJson(data);
            $scope.displayInfo = true;
        });
    };

    $scope.hideInfo = function() {
        $scope.displayInfo = false;
    };

}]);
