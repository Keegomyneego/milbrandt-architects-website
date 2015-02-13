(function() {
  window.log = (function() {
    return $.extend((function(msg, f) {
      var arg, i, ind, _i, _ref;
      if (!log.enabled) {
        return typeof f === "function" ? f() : void 0;
      }
      ind = '';
      for (i = _i = 0, _ref = log.indent; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        ind += '\t';
      }
      if (typeof f !== 'function') {
        return console.log.apply(console, (function() {
          var _j, _len, _results;
          _results = [];
          for (_j = 0, _len = arguments.length; _j < _len; _j++) {
            arg = arguments[_j];
            _results.push(ind + arg);
          }
          return _results;
        }).apply(this, arguments));
      } else {
        log("" + msg + "...");
        log.indent++;
        attempt(f);
        log.indent--;
        return log("" + msg + "...done");
      }
    }), {
      enabled: false,
      indent: 0,
      enable: function() {
        return log.enabled = true;
      },
      disable: function() {
        return log.enabled = false;
      }
    });
  })();

  window.attempt = function(f) {
    var error;
    try {
      return f();
    } catch (_error) {
      error = _error;
      throw error;
    }
  };

  window.getScript = function(url, callback) {
    var file, re;
    re = /([^\/]+\.[^\/]+)$/;
    file = re.exec(url)[0];
    return $.getScript(url).done(function(data, status) {
      log("%cloading " + file + "..." + status, "color: lightgreen");
      return typeof callback === "function" ? callback() : void 0;
    }).fail(function(jqxhr, settings, exception) {
      log("%cloading " + file + "...failed:", "color: red");
      log("%c" + exception, "color: red");
      return log(exception.stack);
    });
  };

}).call(this);
