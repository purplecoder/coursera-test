(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.dishes ="";
    $scope.checkDishes = function(){
      if($scope.dishes == ""){
        $scope.message="Please enter data first";
        $scope.message_color = "red";
      }
      else {
        $scope.message=( $scope.dishes.split(",").length > 3) ? "Too much!" : "Enjoy!" ;
        $scope.message_color = "green";
      }
    };
  }
})();
