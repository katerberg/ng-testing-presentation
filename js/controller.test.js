(function(angular) {
'use strict';
describe('TestCtrl', function() {
    var scope;

    beforeEach(module('testApp'));

    describe('after start up', function() {
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new()
            $controller('TestCtrl', {
                $scope: scope
            });
            scope.$digest();
        }));

        it('is defined', function() {
            expect(scope).toBeDefined();
        });
    });
});
})(angular);
