chronosugar
===========

chronosugar lets you deal with time-related calculations in JavaScript with
style and depends on no particular JavaScript framework whatsoever.

Units
-----

The baseline unit is milliseconds:

    (3).hours() + (14).minutes() == 11640000

If you're not fond of surrounding your numbers with parens, you could also use
the decimal point syntax hack:

    7..days() + 1..hour() == 608400000

The following unit methods are added to `Number.prototype`:

* `seconds`
* `minutes`
* `hours`
* `days`
* `months`
* `years`

Their singular equivalents are aliased as expected; `1..minute()` works just
fine.

Timers
------

Two more methods are added to `Number.prototype`:

* `after`
* `repeat`

So instead of using `window.setTimeout` and `window.setInterval`, you can
instead write:

    3..minutes().after(function() {
      window.location.reload();
    }); // Reload the page in 3 minutes

And annoy your user with style:

    5..seconds().repeat(function() {
      alert("Hey listen!");
    }); // Nag every 5 seconds

Both methods return a `Timer` object:

    var nag = 3..seconds.repeat(function() {
      alert("Set us as your homepage!");
    });

    5..minutes.later(function() {
      nag.clear();
    });

The `Timer` object contains an `id` property; don't change this. It's the
integer that's needed to call `clearTimeout` or `clearInterval`.
