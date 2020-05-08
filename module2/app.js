(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        const toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuy();
        toBuyList.markedAsBought = function (itemIndex) {
            ShoppingListCheckOffService.markedAsBought(itemIndex);
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        const alreadyBoughtList = this;

        alreadyBoughtList.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        const service = this;

        function Product(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }

        const milk = new Product('milk', '2 bottles');
        const cookies = new Product('cookies', '5 bags');
        const cereals = new Product('cereals', '3 packs');
        const pepsi = new Product('pepsi', '4 cans');
        const apples = new Product('apples', '1 kg');

        let toBuy = [milk, cookies, cereals, pepsi, apples];
        let alreadyBought = [];

        service.markedAsBought = function (itemIndex) {
            alreadyBought.push(toBuy[itemIndex]);
            toBuy.splice(itemIndex, 1);
        }

        service.getToBuy = function () {
            return toBuy;
        }

        service.getBought = function () {
            return alreadyBought;
        }
    }
}
    )();