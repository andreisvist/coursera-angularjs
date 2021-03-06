(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('BasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController(MenuSearchService) {
        const ctrl = this;
        ctrl.searchTerm = "";
        ctrl.found = [];
        ctrl.ifFoundFlag = true;
        
        ctrl.getMatchedMenuItems = function (searchTerm) {
            ctrl.found = [];
            ctrl.ifFoundFlag = true;
            if (ctrl.searchTerm.length) {
                const prom = MenuSearchService.getMatchedMenuItems(searchTerm);
                prom.then(function (response) {
                    ctrl.found = response;
                    if (!ctrl.found.length) { ctrl.ifFoundFlag = false; }
                })
            } else {
                ctrl.ifFoundFlag = false;
            };
            ctrl.searchTerm = "";
        }

        ctrl.onRemove = function (itemIndex) {
            ctrl.found.splice(itemIndex, 1);
        }
    }

    function FoundItemsDirective() {
        const ddo = {
            templateUrl: 'supposeddishes.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            restrict: "E",
            controller: FoundItemsDirectiveController,
            controllerAs: 'ctrl',
            bindToController: true,
            link: FoundItemsDirectiveLink
        };
        return ddo;
    }

   function FoundItemsDirectiveController() {
       const ctrl = this;

       ctrl.itemsFound = function () {
           console.log("ctrl.found in directive controller:", ctrl.foundItems);
           if (ctrl.foundItems.length) { return true; }
           else { return false; }
       }
    }

    function FoundItemsDirectiveLink(scope, element, attrs, controller) {

        scope.$watch('ctrl.itemsFound()', function (newVal) {
            if (newVal === true) { displayResults(); }
            else { hideResults(); }
        })

        function displayResults() {
            const myDiv = element.find("div");
            myDiv.css('display', 'block');
        }

        function hideResults() {
            const myDiv = element.find("div");
            myDiv.css('display', 'none');
        }

    }

    MenuSearchService.$inject = ['$http', 'BasePath']
    function MenuSearchService($http, BasePath) {
        const service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: BasePath
            }).then(function (result) {
                let found = [];
                for (let i of result.data.menu_items) {
                    if (i.name.toLowerCase().indexOf(searchTerm) ==! -1 || i.description.toLowerCase().indexOf(searchTerm) ==! -1) {
                        found.push(i);
                    }
                }
                return found;
            })
        }
    }
})();