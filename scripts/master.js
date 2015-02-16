(function() {
  $.getScript("scripts/utils.js", function() {
    log.enable();
    getScript("scripts/angular/angular.js", function() {
      getScript("scripts/bootstrap/bootstrap.js");
      getScript("scripts/bootstrap/ui-bootstrap-tpls-0.12.0.js");
      return getScript("scripts/angular/angular-touch.js", function() {
        return getScript("scripts/angular/angular-carousel.js", function() {
          return getScript("scripts/angular/init.js", function() {
            return getScript("scripts/angular/controllers/ContentCtrl.js", function() {
              log('bootstrapping myApp', function() {
                return angular.bootstrap(document, ['myApp']);
              });
              return log('setup complete');
            });
          });
        });
      });
    });
    return getScript("scripts/jquery-ui.js", function() {
      return getScript("scripts/plugins/mutate.events.js", function() {
        return getScript("scripts/plugins/mutate.js", function() {
          return getScript("scripts/plugins/scrollTo.js", function() {
            return getScript("scripts/animations.js");
          });
        });
      });
    });
  });

}).call(this);
