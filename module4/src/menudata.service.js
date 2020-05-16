(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('AllCategoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('CategoryItemsPath', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

    MenuDataService.$inject = ['AllCategoriesPath', 'CategoryItemsPath', '$http']
    function MenuDataService(AllCategoriesPath, CategoryItemsPath, $http) {
        const service = this;

        service.getAllCategories = function () {
            return $http({
                method: 'GET', url: AllCategoriesPath
            }).then(function (res) {
                return res;
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: 'GET', url: (CategoryItemsPath + categoryShortName)
            }).then(function (res) {
                return res;
            });
        }
    }
})();