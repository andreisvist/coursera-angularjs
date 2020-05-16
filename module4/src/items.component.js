(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/templates/category_items.template.html',
            bindings: {
                items: '<'
            }
        });
})();