(function() {
  $.ajaxSetup({
    async: true
  });

  $.getScript("scripts/jquery.js");

  $.getScript("scripts/bootstrap/bootstrap.js");

  $.getScript("scripts/angular/init.js");

  $.getScript("scripts/angular/controllers/CarouselCtrl.js");

  $.getScript("scripts/angular/controllers/ContentCtrl.js");

  $.ajaxSetup({
    async: true
  });

  $.getScript("scripts/animations.js");

  $.getScript("scripts/google-search.js");

  $.getScript("scripts/angular/angular-touch.js");

  $.getScript("scripts/angular/angular-carousel.js");

  $.getScript("scripts/plugins/scrollTo.js");

}).call(this);
