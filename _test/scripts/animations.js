(function() {
  $(document).ready(function() {
    return $("#page-header .nav > li > a:link").on("click", function(event) {
      var offsetTop, target;
      $("#page-header .nav > li").removeClass("active");
      $(this).parent().addClass("active");
      target = this.href.match("#.*$")[0];
      offsetTop = $("#page-body-viewport").offset().top;
      $("#page-body-viewport").scrollTo(target, {
        offsetTop: offsetTop
      });
      return $(window).resize(function() {
        return window.location = window.location;
      });
    });
  });

}).call(this);
