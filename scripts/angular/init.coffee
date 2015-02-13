log 'init myApp', ->
  angular
    .module 'myApp', ['ui.bootstrap', 'angular-carousel']
    .config ['$locationProvider', ($locationProvider) ->
      $locationProvider.html5Mode true
      log 'set html5Mode'
    ]