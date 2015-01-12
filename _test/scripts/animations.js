(function() {
  $(document).ready(function() {
    return $("#page-header .nav > li a:link").on("click", function(event) {
      var error, offsetTop, target;
      try {
        if ($(this).is(".nav > li > a")) {
          $("#page-header .nav > li").removeClass("active");
          $(this).parent().addClass("active");
        }
        target = this.href.match("#.*$")[0];
        if (target !== "#") {
          offsetTop = $("#page-body-viewport").offset().top;
          $("#page-body-viewport").scrollTo(target, {
            offsetTop: offsetTop
          });
          return $(window).resize(function() {
            return window.location = window.location;
          });
        }
      } catch (_error) {
        error = _error;
        return console.log(error);
      }
    });
  });

}).call(this);
