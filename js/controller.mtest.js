(function(angular) {
'use strict';
describe('TestCtrl', function() {
    var scope;

    beforeEach(module('testApp'));

    describe('after start up', function() {
        beforeEach(inject(function($controller, $rootScope) {
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
            it('populates selectedOption', function() {
                var input = {'some': 'item'};

                scope.selectOption(input);

                scope.selectedOption.should.equal(input);
            });
            
            it('gives grade from service', function() {
                scope.selectOption(94);

                scope.grade.should.equal('A');
            });
        });
    });
});
})(angular);
