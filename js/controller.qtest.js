(function(angular) {
'use strict';

test('my test', function() {
    ok('foo');
});

var injector = angular.injector(['ng', 'testApp']);
var scope;

var init = {
    setup: function() {
        scope = injector.get('$rootScope').$new();
        var $controller = injector.get('$controller');
        $controller('TestCtrl', {
            $scope: scope
        });
    }
};

module('TestCtrl', init);

test('stood up correctly', function(){
    ok(scope);
});

})(angular);
