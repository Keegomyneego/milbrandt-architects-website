(function() {
  angular.module('myApp', ['ui.bootstrap']).config([
    '$locationProvider', function($locationProvider) {
      return $locationProvider.html5Mode(true);
    }
  ]);

}).call(this);
