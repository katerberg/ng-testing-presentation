(function(angular) {
'use strict';
describe('TestCtrl', function() {
    var scope,
        testService;

    beforeEach(module('testApp'));

    describe('after start up', function() {
        beforeEach(inject(function($controller, $rootScope, _testService_) {
            testService = _testService_;
            scope = $rootScope.$new();

            $controller('TestCtrl', {
                $scope: scope
            });
            scope.$digest();
        }));

        it('is defined', function() {
            should.exist(scope);
        });

        describe('#selectOption()', function() {
            beforeEach(function() {
                testService.getMessageFromOption = sinon.stub();
            });

            it('populates selectedOption', function() {
                var input = {'some': 'item'};

                scope.selectOption(input);

                scope.selectedOption.should.equal(input);
            });
            
            it('gives grade from service', function() {
                var input = 'something',
                    expected = 'something else';
                testService.getMessageFromOption.withArgs(input).returns(expected);
                
                scope.selectOption(input);

                scope.grade.should.equal(expected);
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

    describe('after start up', function() {
        beforeEach(inject(function(_testService_) {
            instance = _testService_;
        }));

        it('is defined', function() {
            should.exist(instance);
        });
    });

    describe('#getMessageFromOption()', function() {
        it('gives A for 100%', function() {
            instance.getMessageFromOption(100).should.equal('A');
        });

        it('gives A for 95%', function() {
            instance.getMessageFromOption(95).should.equal('A');
        });

        it('gives F for 94%', function() {
            instance.getMessageFromOption(94).should.equal('F');
        });

        it('gives F for 0%', function() {
            instance.getMessageFromOption(0).should.equal('F');
        });
    });
});
})(angular);
