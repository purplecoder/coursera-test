// declare a module
var LunchCheck = angular.module('LunchCheck', []);
LunchCheck.controller('LunchCheckController', ['$scope', function($scope) {
  $scope.dishes ="";
  $scope.checkDishes = function(){
    if($scope.dishes == "")
      $scope.message="Please enter data first";
    else {
      $scope.message=( $scope.dishes.split(",").length > 3) ? "Too much!" : "Enjoy!" ;
    }
  };
}]);
