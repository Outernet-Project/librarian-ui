// Generated by CoffeeScript 1.10.0
(function(window, $) {
  return $.history = {
    randomDigit: function() {
      return Math.floor(Math.random() * (9 - 0));
    },
    randomNumber: function(digits) {
      var i, j, ref, results;
      if (digits == null) {
        digits = 10;
      }
      results = [];
      for (i = j = 0, ref = digits; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        results.push(this.randomDigit());
      }
      return results;
    },
    push: function(url) {
      var id, res;
      id = (this.randomNumber()).join('');
      res = $.get(url);
      res.done(function(data) {
        window.history.pushState(id, null, url);
        return window.localStorage[id] = data;
      });
      return res;
    },
    pop: function(id) {
      var data;
      data = window.localStorage[id];
      del(window.localStorage[id]);
      return data;
    }
  };
})(this, this.jQuery);
