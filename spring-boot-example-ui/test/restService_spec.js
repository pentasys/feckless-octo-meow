describe('test.restService_spec', function() {

    beforeEach(module('spring-boot-example'));

    var underTest;
    var $httpBackend;
    var $log;

    beforeEach(inject(function($injector) {
        underTest = $injector.get('restService');
        $httpBackend = $injector.get('$httpBackend');
        $log = $injector.get('$log');
    }));
    
    describe('factory: restService', function() {

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('Should load data from server', function() {
            $httpBackend.expectGET("http://localhost:8080/info").respond(200, 'foo', null, 'OK');
            underTest.load("http://localhost:8080/info").then(function(data) {
                expect(data).toEqual('foo');
            });
            $httpBackend.flush();
        });

        it('Should handle error', function() {
            $httpBackend.whenGET().respond(404, null, null, 'Not Found');
            underTest.load("").then(function(data) {
                expect(data).toBeUndefined();
            });
            $httpBackend.flush();
            expect($log.error.logs).toContain(['Failed to load data: 404'])
        });
    });
});
