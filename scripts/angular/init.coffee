angular
  .module 'myApp', ['ui.bootstrap']
  .config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode true
  ]