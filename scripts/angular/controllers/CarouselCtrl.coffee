angular.module 'myApp'
  .controller 'CarouselCtrl', ($scope) ->
    $scope.myInterval = 2500
    $scope.slides = [
      image: "assets/images/cat1.jpg",
      text: "Cat 1"
    ,
      image: "assets/images/cat2.jpg",
      text: "Cat 2"
    ,
      image: "assets/images/cat3.jpg",
      text: "Cat 3"
    ]
