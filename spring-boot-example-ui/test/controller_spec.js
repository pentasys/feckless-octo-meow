describe('spring-boot-example-ui/test/controller_spec', function() {
    beforeEach(module('spring-boot-example'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
    
    describe('test scope variable responseData', function() {
        it('it should contain an error message', function() {
            var $scope = {};
            var controller = $controller('ctrl', { $scope: $scope });
            expect($scope.responseData).toEqual('failed to load data');
        });
    });
});
