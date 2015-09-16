(function(angular) {
'use strict';

angular.module('testApp', [])
.controller('TestCtrl', ['$scope', function($scope) {
    function selectOption(selection) {
        $scope.selectedOption = selection;
    }

    $scope.selectOption = selectOption;

}]);
})(angular);
