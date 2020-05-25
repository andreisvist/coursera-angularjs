(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService', 'allItems', '$scope'];
    function SignUpController(SignUpService, allItems, $scope) {
        const ctrl = this;
        ctrl.firstName = '';
        ctrl.lastName = '';
        ctrl.email = '';
        ctrl.phone = '';
        ctrl.dishCode = '';
        ctrl.doneFlag = false;
        ctrl.allItems = allItems.menu_items;
        ctrl.personForm;

        ctrl.savedMessage = 'Your infromation has been saved!';

        ctrl.onClick = function () {
            SignUpService.savePerson(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phone, ctrl.dishCode);
            ctrl.doneFlag = true;
        };

        // Validation
        ctrl.checkIfIn = function (field) {
            let validity;
            if (field) {
                for (let i = 0; i < ctrl.allItems.length; i++) {
                    if (ctrl.dishCode === ctrl.allItems[i].short_name) {
                        field.$setValidity('matched', true);
                        break;
                    } else { field.$setValidity('matched', false); }
                };
                console.log(validity);
                return validity;
            }
        }

    }
})();