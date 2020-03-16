(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = "";
        $scope.message = "";

        $scope.checkIfTooMuch = function() {
            if ($scope.menu.length) {
                if ($scope.menu.split(',').length > 3) {
                    let totalItems = [];
                    for (let i = 0; i < $scope.menu.split(',').length; i++) {
                        if ($scope.menu.split(',')[i].length) {
                            totalItems.push($scope.menu.split(',')[i]);
                        }
                    }
                    if (totalItems.length > 3) {
                        $scope.message = "Too much!";
                    } else {
                        $scope.message = "Enjoy!";
                    }
                } else {
                    $scope.message = "Enjoy!";
                }
            } else {
                $scope.message = "Please enter the data first";
            }
        }
    }
})();

