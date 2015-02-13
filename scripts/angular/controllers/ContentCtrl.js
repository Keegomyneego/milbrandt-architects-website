(function() {
  attempt(function() {
    return angular.module('myApp').controller('ContentCtrl', function($scope) {
      $scope.topNavCollapsed = true;
      $scope.bottomNavCollapsed = true;
      $scope.toggleTopNav = function() {
        return $scope.topNavCollapsed = !$scope.topNavCollapsed;
      };
      return $scope.toggleBottomNav = function() {
        return $scope.bottomNavCollapsed = !$scope.bottomNavCollapsed;
      };
    });
  });

}).call(this);
