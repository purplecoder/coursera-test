(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/restorant/templates/items.template.html',
  bindings: {
    items: '<'
  }
});
})();
