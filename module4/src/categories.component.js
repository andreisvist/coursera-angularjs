(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/templates/category_list.template.html',
            bindings: {
                categories: '<'
            }
        });
})();