(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/restorant/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});
})();
