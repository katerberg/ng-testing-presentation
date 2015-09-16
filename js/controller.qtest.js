(function(angular) {
'use strict';

var injector = angular.injector(['ng', 'testApp']);
var scope,
    testService;

var testCtrlInit = {
    beforeEach: function() {
        scope = injector.get('$rootScope').$new();
        testService = injector.get('testService');
        var $controller = injector.get('$controller');
        $controller('TestCtrl', {
            $scope: scope
        });

        testService.getMessageFromOption = sinon.stub();
    }
};

module('TestCtrl', testCtrlInit);

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

(function(angular) {
'use strict';

var injector = angular.injector(['ng', 'testApp']);

var instance;

var testServiceInit = {
    setup: function() {
        instance = injector.get('testService');
    }
};

module('testService', testServiceInit);

test('stood up correctly', function() {
    ok(instance);
});

test('getMessageFromOption gives correct grades', function() {
    equal(instance.getMessageFromOption(100), 'A', 'Incorrect grade for 100%');
    equal(instance.getMessageFromOption(95), 'A', 'Incorrect grade for 95%');
    equal(instance.getMessageFromOption(94), 'F', 'Incorrect grade for 94%');
    equal(instance.getMessageFromOption(0), 'F', 'Incorrect grade for 0%');
});

})(angular);
