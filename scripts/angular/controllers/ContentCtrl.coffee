angular.module 'myApp'
  .controller 'ContentCtrl', ($scope)->

    # Navigation collapse controls

    $scope.topNavCollapsed = true
    $scope.bottomNavCollapsed = true

    $scope.toggleTopNav = ->
      $scope.topNavCollapsed = !$scope.topNavCollapsed

    $scope.toggleBottomNav = ->
      $scope.bottomNavCollapsed = !$scope.bottomNavCollapsed
