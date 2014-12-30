(function() {
  angular.module('myApp', ['ngRoute', 'ui.bootstrap']).config(function($routeProvider, $locationProvider) {
    return $locationProvider.html5Mode(true);
  });

}).call(this);
