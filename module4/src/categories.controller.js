(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('AllCategoriesController', AllCategoriesController);

    AllCategoriesController.$inject = ['MenuDataService', 'categories']
    function AllCategoriesController(MenuDataService, categories) {
        const categoriesList = this;
        categoriesList.categories = categories;
    }
})();