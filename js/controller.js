angular.module('myApp',[]).controller('TimeoutController',function($scope) {
 
  $scope.scheduleTask = function() {
    setTimeout(function() {
      $scope.$apply(function() {
        $scope.message = 'Fetched after 3 seconds';
        console.log('message='+$scope.message);
        }); //log this to console
      }, 3000);
    }
});