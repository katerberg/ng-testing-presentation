(function(angular) {
'use strict';
describe('TestCtrl', function() {
    var scope,
        testService;

    beforeEach(module('testApp'));

    describe('after start up', function() {
        beforeEach(inject(function($controller, $rootScope, _testService_) {
            scope = $rootScope.$new();
            testService = _testService_;
            $controller('TestCtrl', {
                $scope: scope
            });
            scope.$digest();
        }));

        it('is defined', function() {
            expect(scope).toBeDefined();
        });

        describe('#selectOption()', function() {
            beforeEach(function() {
                spyOn(testService, 'getMessageFromOption');
            });

            it('populates selectedOption', function() {
                var input = {'some': 'item'};

                scope.selectOption(input);

                expect(scope.selectedOption).toBe(input);
            });
            
            it('gives grade from service', function() {
                var input = 'some input',
                    expected = 'some message';
                testService.getMessageFromOption.and.returnValue(expected);

                scope.selectOption(input);

                expect(testService.getMessageFromOption).toHaveBeenCalledWith(input);
                expect(scope.grade).toEqual(expected);
            });
        });
    });
});
})(angular);
