(function(angular) {
'use strict';

angular.module('testApp', [])
})(angular);

(function(angular) {
'use strict';

angular.module('testApp')
.controller('TestCtrl', ['$scope', 'testService', function($scope, testService) {
    function selectOption(selection) {
        $scope.selectedOption = selection;
        $scope.grade = testService.getMessageFromOption(selection);
    }

    $scope.selectOption = selectOption;

}]);
})(angular);

(function(angular) {
'use strict';

angular.module('testApp')
.factory('testService', [function() {
    function getMessageFromOption(option) {
        if (option >= 95) {
            return 'A';
        }
        return 'F';
    }

    return {
        getMessageFromOption: getMessageFromOption
    };
}]);
})(angular);
