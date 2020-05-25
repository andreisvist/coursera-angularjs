(function () {
    'use strict';

    angular.module('common')
        .service('SignUpService', SignUpService);

    function SignUpService() {
        const service = this;

        service.registeredPeople = [];

        service.savePerson = function (firstName, lastName, email, phone, dishCode) {
            service.registeredPeople.push(
                {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "phone": phone,
                    "dishCode": dishCode
                }
            )
        }

        service.displayPeople = function () {
            return service.registeredPeople;
        }

        service.getFavItem = function () {
            if (service.registeredPeople.length) {
                let lastPerson = service.registeredPeople[service.registeredPeople.length - 1];
                return lastPerson.dishCode;
            }
        }
        
    }
})();