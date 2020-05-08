(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('BasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

    NarrowItDownController.$inject = ['$scope', 'MenuSearchService']
    function NarrowItDownController($scope, MenuSearchService) {
        const nidc = this;
        $scope.searchTerm = '';
        nidc.found = [];

        nidc.initiateSearch = function () {
            nidc.found = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
            console.log(nidc.found);
            return nidc.found
        }
    }

    MenuSearchService.$inject = ['$http', 'BasePath'];
    function MenuSearchService($http, BasePath) {
        const service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return response = $http({
                method: "GET",
                url: BasePath
            }).then(function (result) {
                let foundItems = [];
                for (let i of result.data) {
                    if (!i.name.toLowerCase().indexOf(searchTerm) === -1 || !i.description.toLowerCase().indexOf(searchTerm) === -1) {
                        foundItems.push(i);
                    }
                };
                console.log(foundItems);
                return foundItems
            }).catch(function (errorResponse) { console.log(errorResponse.message) });
        }
    }
});