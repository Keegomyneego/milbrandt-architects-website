(function() {
  window.log = (function() {
    return $.extend((function(msg, f) {
      var arg, i, indent, _i, _ref;
      if (!log.enabled) {
        return typeof f === "function" ? f() : void 0;
      }
      indent = '';
      for (i = _i = 0, _ref = log.indent; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        indent += '\t';
      }
      if (typeof f !== 'function') {
        return console.log.apply(console, (function() {
          var _j, _len, _results;
          _results = [];
          for (_j = 0, _len = arguments.length; _j < _len; _j++) {
            arg = arguments[_j];
            _results.push(indent + arg);
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

  window.getScript = function(url, succcess, failure) {
    var fileName, re;
    re = /([^\/]+\.[^\/]+)$/;
    fileName = re.exec(url)[0];
    return $.getScript(url).done(function(data, status) {
      log("%cloading " + fileName + "..." + status, "color: lightgreen");
      return typeof succcess === "function" ? succcess() : void 0;
    }).fail(function(jqxhr, settings, exception) {
      log("%cloading " + fileName + "...failed:", "color: red");
      log("%c" + exception, "color: red");
      log(exception.stack);
      return typeof failure === "function" ? failure() : void 0;
    });
  };

}).call(this);
