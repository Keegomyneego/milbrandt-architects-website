(function() {
  log('init myApp', function() {
    return angular.module('myApp', ['ui.bootstrap', 'angular-carousel']).config([
      '$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
        return log('set html5Mode');
      }
    ]);
  });

}).call(this);
