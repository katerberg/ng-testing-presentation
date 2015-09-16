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
            expect(scope).toBeDefined();
        });

        describe('#selectOption()', function() {
            it('populates selectedOption', function() {
                var input = {'some': 'item'};

                scope.selectOption(input);

                expect(scope.selectedOption).toBe(input);
            });
            
            it('gives A grade with 94 percent', function() {
                scope.selectOption(94);

                expect(scope.grade).toEqual('A');
            });
        });
    });
});
})(angular);
