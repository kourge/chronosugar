
(function(np, setTimeout, clearTimeout, setInterval, clearInterval) {
  "use strict";
  function second() { return this * 1000; }
  function minute() { return this * 60 * 1000; }
  function hour() { return this * 60 * 60 * 1000; }
  function day() { return this * 24 * 60 * 60 * 1000; }
  function month() { return this * 30 * 24 * 60 * 60 * 1000; }
  function year() { return this * 365 * 24 * 60 * 60 * 1000; }

  function Timer(id, clearFunction) {
    return {id: id, clear: function clear() { clearFunction(this.id); }};
  }

  function after(f) { return new Timer(setTimeout(f, this), clearTimeout); }
  function repeat(f) { return new Timer(setInterval(f, this), clearInterval); }

  np.seconds = np.second = second;
  np.minutes = np.minute = minute;
  np.hours = np.hour = hour;
  np.days = np.day = day;
  np.months = np.month = month;
  np.years = np.year = year;
  np.after = after;
  np.repeat = repeat;
})(
  Number.prototype, setTimeout, clearTimeout, setInterval, clearInterval
);

