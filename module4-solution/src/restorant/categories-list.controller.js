(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

// 'item' is injected through state's resolve
CategoriesListController.$inject = ['MenuDataService']
function CategoriesListController(MenuDataService) {
  var categoriesList = this;
  MenuDataService.getAllCategories()
    .then(function (data) {
      categoriesList.items = data;
    });
}

})();
