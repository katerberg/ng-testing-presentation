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

(function(angular) {
'use strict';
describe('testService', function() {
    var instance;

    beforeEach(module('testApp'));

    beforeEach(inject(function(_testService_) {
        instance = _testService_;
    }));

    it('is defined', function() {
        expect(instance).toBeDefined();
    });

    describe('#getMessageFromOption()', function() {
        it('gives A for 100%', function() {
            expect(instance.getMessageFromOption(100)).toEqual('A');
        });

        it('gives A for 95%', function() {
            expect(instance.getMessageFromOption(95)).toEqual('A');
        });

        it('gives F for 94%', function() {
            expect(instance.getMessageFromOption(94)).toEqual('F');
        });

        it('gives F for 0%', function() {
            expect(instance.getMessageFromOption(0)).toEqual('F');
        });
    });
});
})(angular);
