(function(angular) {
'use strict';

var injector = angular.injector(['ng', 'testApp']);
var scope,
    testService;

var init = {
    setup: function() {
        scope = injector.get('$rootScope').$new();
        testService = injector.get('testService');
        var $controller = injector.get('$controller');
        $controller('TestCtrl', {
            $scope: scope
        });

        testService.getMessageFromOption = sinon.stub();
    }
};

module('TestCtrl', init);

test('stood up correctly', function() {
    ok(scope);
});

test('selectOption selects option correctly', function() {
    var input = {'some': 'value'};

    scope.selectOption(input);

    strictEqual(scope.selectedOption, input, 'item was not selected');
});

test('selectOption gives grade from service', function() {
    var input = 94,
        expected = 'A';
    testService.getMessageFromOption.withArgs(input).returns(expected);

    scope.selectOption(input);

    equal(scope.grade, expected, 'Did not display grade');
});


})(angular);
