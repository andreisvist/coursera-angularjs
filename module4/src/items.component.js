(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemsList', {
            templateUrl: 'src/templates/category_items_list.template.html',
            bindings: {
                items: '<'
            }
        });
})();