(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })

      .state('public.signup', {
          url: '/sign-up',
          templateUrl: 'src/public/sign-up/signup.html',
          controller: 'SignUpController',
          controllerAs: 'signUpCtrl',
          resolve: {
              allItems: ['MenuService', function (MenuService) {
                  return MenuService.getAllItems();
              }]
          }
      })

      .state('public.myinfo', {
          url: '/my-info',
          templateUrl: 'src/public/my-info/myinfo.html',
          controller: 'MyInfoController',
          controllerAs: 'myInfoCtrl',
          resolve: {
              registeredPeople: ['SignUpService', function (SignUpService) {
                  return SignUpService.displayPeople();
              }],
              favItem: ['MenuService', 'SignUpService', function (MenuService, SignUpService) {
                  return MenuService.getFavoriteMenuItem(
                      SignUpService.getFavItem()
                  );
              }]
          }
      });
}
})();
