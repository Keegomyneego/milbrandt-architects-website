angular.module 'myApp', ['ngRoute', 'ui.bootstrap']
  .config ($routeProvider, $locationProvider) ->
    $locationProvider.html5Mode true