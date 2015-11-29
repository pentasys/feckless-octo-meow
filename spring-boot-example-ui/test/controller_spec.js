describe('test.controller_spec', function() {

    beforeEach(module('spring-boot-example'));

    var $controller;
    var $location;
    var restService;

    beforeEach(inject(function($injector){
        $controller = $injector.get('$controller');
        $location = $injector.get('$location');
        restService = $injector.get('restService');
    }));
    
    describe('controller: ctrl', function() {
        var $scope;

        beforeEach(function() {
            $scope = {};
            $controller('ctrl', { $scope: $scope, $location: $location, restService: restService });
        });

        it('Should define variable', function() {
            expect($scope.serverInfo).toBeDefined();
        });

        it('Should define function', function() {
            expect($scope.loadAppInfo).toBeDefined();
            expect($scope.loadAppInfo).toEqual(jasmine.any(Function));
        });

        it('Should set displayInfo flag to true', function() {
            // todo: mock restService response
            //expect($scope.displayInfo).toBeTruthy();
        });
    });
});
