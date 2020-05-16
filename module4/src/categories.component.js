(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/templates/category_list.template.html',
            bindings: {
                categories: '<'
            }
        });
})();