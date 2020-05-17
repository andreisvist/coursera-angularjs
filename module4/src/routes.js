(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to the home page if no other url matches

        $urlRouterProvider.otherwise('/home');

        // Setting up UI states

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'src/templates/home.template.html'
            })

            .state('categoriesList', {
                url: '/categories-list',
                templateUrl: "src/templates/categories.template.html",
                controller: 'AllCategoriesController as categoriesList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('itemsList', {
                url: '/category-items/{categoryShortName}',
                templateUrl: 'src/templates/category_items.template.html',
                controller: 'ItemsListController as itemsList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                        }]
                },
                params: {
                    categoryShortName: null
                }
            })

    }
})();