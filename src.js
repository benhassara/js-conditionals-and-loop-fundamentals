var yourCode = {
  commafy: function(n) {
    var output = "";

    for (var i = 1; i <= n; i++) {
      if (i === n)
        output += i;
      else
        output += i + ',';
    }

    return output;
  },

  joinToString: function(array) {
    var output = "";

    for (var i = 0; i < array.length; i++) {
      if (i === array.length - 1)
        output += array[i] + ' oh my.';
      else
        output += array[i] + ' and ';
    }

    return output;
  },

  printBracketedNumbers: function(n) {
    var output = "";

    for (var i = 0; i <= n; i++)
      output += '[' + i + ']';

    return output;
  },

  sumOfN: function(n) {
    var total = 0;

    for (var i = 0; i <= n; i++)
      total += i;

    return total;
  },

  moviesFor: function(name) {

    switch (name) {
      case 'Robin Williams':
        return 'Jumanji, Hook, Good Will Hunting';
      case 'Sandra Bullock':
        return 'Gravity, The Lake House, The Blind Side';
      case 'Daniel Radcliffe':
        return 'All of the Harry Potters';
      default:
        return 'Please provide an actor or actress';
    }

  },

  joinWithForAndIndex: function(array) {
    var output = "";

    array.forEach(function(a, i){output += a + i;});

    return output;
  },

  joinWithForAndToken: function(array, token) {
    var output = "";

    array.forEach(function(a){output += a + token;});
    output = output.substr(0, output.length-1);

    return output;
  }
};

module.exports = yourCode;
