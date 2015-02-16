(function() {
  $(document).ready(function() {
    var target;
    $('#page-body-viewport').mutate('height width', function() {
      var offsetTop, target;
      target = window.location.hash;
      if (target === "") {
        target = "#home";
      }
      offsetTop = $("#page-body-viewport").offset().top;
      return $("#page-body-viewport").scrollTo(target, {
        offsetTop: offsetTop,
        duration: 0
      });
    });
    $("#page-header .nav > li a:link").on("click", function(event) {
      var containsCarousel, offsetTop, target, _base;
      target = this.href.match("#.*$")[0];
      if (target.length > 0 && target !== "#") {
        containsCarousel = $(target).has(".carousel").length !== 0;
        if (typeof (_base = $(".carousel")).carousel === "function") {
          _base.carousel(containsCarousel ? "pause" : "cycle");
        }
        log(containsCarousel ? "pause" : "cycle");
        $("#page-header .nav li").removeClass("active");
        $(this).parents("#page-header .nav li").addClass("active");
        offsetTop = $("#page-body-viewport").offset().top;
        $("#page-body-viewport").scrollTo(target, {
          offsetTop: offsetTop
        });
        return false;
      }
    });
    target = window.location.hash;
    if (target === "") {
      target = "#home";
    }
    return $("a[href='" + target + "']").click();
  });

}).call(this);
