(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = "";
        $scope.message = "";
        $scope.myStyleDefault = {};
        const redStyle = { "color": "red", "border-color": "red", "padding": "4px", "border-style": "solid" };
        const greenStyle = { "color": "green", "border-color": "green", "padding": "4px", "border-style": "solid"}; 

        $scope.checkIfTooMuch = function() {
            if ($scope.menu.length) {
                if ($scope.menu.split(',').length > 3) {
                    let totalItems = [];
                    for (let i = 0; i < $scope.menu.split(',').length; i++) {
                        if ($scope.menu.split(',')[i].trim().length > 0) {
                            totalItems.push($scope.menu.split(',')[i]);
                        }
                    }
                    if (totalItems.length > 3) {
                        $scope.message = "Too much!";
                        $scope.myStyle = greenStyle;
                    } else if (totalItems.length === 0) {
                        $scope.message = "Please enter the data first";
                        $scope.myStyle = redStyle;
                    } else {
                        $scope.message = "Enjoy!";
                        $scope.myStyle = greenStyle;
                    }
                } else {
                    $scope.message = "Enjoy!";
                    $scope.myStyle = greenStyle;
                }
            } else {
                $scope.message = "Please enter the data first";
                $scope.myStyle = redStyle;
            }
            $scope.menu = "";
        }
    }
})();

