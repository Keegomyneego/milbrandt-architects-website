(function() {
  angular.module('myApp').controller('CarouselCtrl', function($scope) {
    $scope.myInterval = 2500;
    return $scope.slides = [
      {
        image: "assets/images/cat1.jpg",
        text: "Cat 1"
      }, {
        image: "assets/images/cat2.jpg",
        text: "Cat 2"
      }, {
        image: "assets/images/cat3.jpg",
        text: "Cat 3"
      }
    ];
  });

}).call(this);
