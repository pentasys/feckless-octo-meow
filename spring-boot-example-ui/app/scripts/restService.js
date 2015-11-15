app.factory("restService", ["$http", "$log", function ($http, $log) {
    return {
        load: load
    };

    function load(url) {
        return $http.get(url)
            .then(loadSuccess)
            .catch(handleError);

        function loadSuccess(response) {
            return response.data;
        }

        function handleError(error) {
            $log.error("Failed to load teasers. Data is " + error.data);
        }
    }
}]);
