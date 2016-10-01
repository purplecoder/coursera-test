(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.directive('itemsLoaderIndicator',ItemsLoaderIndicatorDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.filter = "";
  menu.found = null;
  menu.showSearch = false;

  menu.getMenu = function () {
    menu.showSearch = true;
    var promise = MenuSearchService.getMatchedMenuItems(menu.filter);

    promise.then(function (response) {
      menu.found = response;
      menu.showSearch = false;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result){
      var foundItems = [];
      console.log(result.data);
      angular.forEach(result.data.menu_items, function(item, itemIndex){
        if (searchTerm != "" && item.description.indexOf(searchTerm) > -1) {
          foundItems.push(item);
        }
      });
      return foundItems;
    });

    return response;
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

function ItemsLoaderIndicatorDirective() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      show: '<'
    }
  };
  return ddo;
  }
})();
