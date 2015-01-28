(function() {
  $(document).ready(function() {
    "use strict";
    var target;
    $(window).resize(function() {
      return $("#page-header .nav .active a:link").click();
    });
    $("#page-header .nav > li a:link").on("click", function(event) {
      var containsCarousel, offsetTop, target;
      target = this.href.match("#.*$")[0];
      if (target.length > 0 && target !== "#") {
        containsCarousel = $(target).has(".carousel").length !== 0;
        $(".carousel").carousel(containsCarousel ? "pause" : "cycle");
        console.log(containsCarousel ? "pause" : "cycle");
        $("#page-header .nav > li").removeClass("active");
        $(this).parents("#page-header .nav > li").addClass("active");
        offsetTop = $("#page-body-viewport").offset().top;
        return $("#page-body-viewport").scrollTo(target, {
          offsetTop: offsetTop
        });
      }
    });
    target = window.location.hash;
    if (target === "") {
      target = "#home";
    }
    return $("a[href='" + target + "']").click();
  });

}).call(this);
