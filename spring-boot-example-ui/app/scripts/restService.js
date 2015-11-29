app.factory("restService", ["$http", "$log", function ($http, $log) {
    "use strict";

    function load(url) {

        function loadSuccess(response) {
            return response.data;
        }

        function handleError(error) {
            $log.error("Failed to load data: " + error.status);
        }

        return $http.get(url)
            .then(loadSuccess)
            .catch(handleError);
    }

    return {
        load: load
    };
}]);
