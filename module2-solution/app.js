(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
 .controller('ToBuyShoppingController', ToBuyShoppingController)
 .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
 .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemBuyer = this;

  itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

  itemBuyer.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{name:"cookies",quantity:"10"},
  {name:"chips",quantity:"5"},
  {name:"milk",quantity:"2"},
  {name:"wine",quantity:"6"},
  {name:"eggs",quantity:"12"},
  {name:"fruits",quantity:"2"},
  {name:"potatos",quantity:"3"},
  {name:"tomatos",quantity:"4"}];
  var alreadyBoughtItems = [];

  service.buyItem = function (itemIndex) {
    alreadyBoughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1)
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})
();
