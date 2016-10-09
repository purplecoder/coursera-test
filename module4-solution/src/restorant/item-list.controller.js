(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

// 'item' is injected through state's resolve
ItemListController.$inject = ['$stateParams', 'MenuDataService']
function ItemListController($stateParams,MenuDataService) {
  var itemDetail = this;
  MenuDataService.getItemsForCategory($stateParams.itemId)
    .then(function (data) {
      itemDetail.name = data.category.name;
      itemDetail.menu_items = data.menu_items;
    });
}

})();
