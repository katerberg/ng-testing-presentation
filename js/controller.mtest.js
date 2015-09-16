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
