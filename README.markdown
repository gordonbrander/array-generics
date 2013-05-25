Array Generics Polyfill
=======================

A quick and simple polyfill for [Array generic functions](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array#Array_generic_methods).

Array generics allow you to work with any array-like object. For example, how many times have you had to do something like this?

    function myFunction() {
      var args = Array.prototype.slice.call(arguments);
      var all = ['extra', 'stuff'].concat(args);
    }

![Lame-o](wheresoda.gif)

The bummer about methods is that they can only work with one type.

How about this instead?

    function myFunction() {
      var all = Array.concat(['extra', 'stuff'], arguments);
    }

![Not bad](clinty.gif)

What about this?

    var specialEl = $('#special-el');
    var els = $('.foo');

    var specialElIndex = Array.indexOf(els, specialEl);

![Nice!](nice.gif)

Or this?

    var isAllGood = Array.every($('li'), function (el) {
      return el.hasClass('good');
    });

![Sweet!](yes.gif)

Basically, Array Generics let you do array stuff with less fuss. Hack on!