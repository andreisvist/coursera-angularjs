(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsListController', ItemsListController);

    ItemsListController.$inject = ['MenuDataService', 'items']
    function ItemsListController(MenuDataService, items) {
        const itemsList = this;
        itemsList.myItems = items.data.menu_items;
    }
})();