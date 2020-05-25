(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['registeredPeople', 'ApiPath', 'favItem'];
    function MyInfoController(registeredPeople, ApiPath, favItem) {
        const ctrl = this;
        ctrl.registeredPeople = registeredPeople;
        ctrl.basePath = ApiPath;
        ctrl.favItem = favItem;
        ctrl.user;

        ctrl.$onInit = function () {
            if (ctrl.registeredPeople.length) {
                ctrl.user = ctrl.registeredPeople[ctrl.registeredPeople.length - 1];

                if (!ctrl.user.phone.length) {
                    ctrl.user.phone = "(not mentioned)";
                }

            }
        }
    }
})();