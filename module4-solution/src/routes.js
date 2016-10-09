(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restorant/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/restorant/templates/categorieslist.template.html',
    controller: 'CategoriesListController as categoriesList'
  })

  .state('itemsList', {
    url: '/items-list/{itemId}',
    templateUrl: 'src/restorant/templates/itemslist.template.html',
    controller: 'ItemListController as categoryDetail'
  });
}

})();
