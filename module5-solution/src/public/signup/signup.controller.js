(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService','UserService'];
function SignupController(MenuService,UserService) {
  var signupCtrl = this;
  signupCtrl.user = {};
  signupCtrl.short_name_error = false;
  signupCtrl.saved_successfully = false;

  signupCtrl.submit = function () {
    MenuService.getMenuItem(signupCtrl.user.short_name).then(function(data){
      if(data){
        signupCtrl.short_name_error = false;
        UserService.saveUser(signupCtrl.user).then(function (response) {
          signupCtrl.saved_successfully = true;
        });
      } else {
        signupCtrl.short_name_error = true;
      }
    });

    signupCtrl.completed = true;
  };
  signupCtrl.reset = function () {
    UserService.reset();
  };
}

})();
