(function () {
    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        const ctrl = this;
        ctrl.firstName = '';
        ctrl.lastName = '';
        ctrl.email = '';
        ctrl.phone = '';
        ctrl.dishCode = '';
        ctrl.doneFlag = false;

        ctrl.savedMessage = 'Your infromation has been saved!';

        ctrl.onClick = function () {
            SignUpService.savePerson(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phone, ctrl.dishCode);
            ctrl.doneFlag = true;
        }
    }
})();