(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.dishes ="";
    function count_non_empty(str){
      var ret = 0;
      angular.forEach(str.split(","),function(value,index){
        ret += (value.trim() != "") ? 1 : 0;
      });
      return ret;
    };
    $scope.checkDishes = function(){
      if($scope.dishes == ""){
        $scope.message="Please enter data first";
        $scope.message_color = "red";
      }
      else {
        $scope.message=( count_non_empty($scope.dishes) > 3) ? "Too much!" : "Enjoy!" ;
        $scope.message_color = "green";
      }
    };
  }
})();
