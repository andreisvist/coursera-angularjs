(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = "";
        $scope.message = "";

        function initMessage() {
            $scope.message = checkIfTooMuch($scope.menu);
            return $scope.message;
        }

        function checkIfTooMuch(str) {
            console.log(str);
            if (str.length) {
                if (str.split(',').length > 3) {
                    let totalItems = [];
                    for (let i = 0; i < str.split(',').length; i++) {
                        if (str.split(',')[i].length) {
                            totalItems.push(str.split(',')[i]);
                        }
                    }
                    if (totalItems.length > 3) {
                        return "Too much!";
                    } else {
                        return "Enjoy!";
                    }
                } else {
                    return "Enjoy!";
                }
            } else {
                return "Please enter the data first";
            }
        }
    }
})();

