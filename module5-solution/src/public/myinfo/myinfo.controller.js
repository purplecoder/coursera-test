(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user','MenuService'];
function MyInfoController(user,MenuService) {
  var myInfoCtrl = this;
  myInfoCtrl.user = user;
  MenuService.getMenuItem(myInfoCtrl.user.short_name).then(function (response) {
    myInfoCtrl.user.menu_item = response;
  });
}

})();
