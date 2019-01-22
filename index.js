var stringDifference = function() {
  this.calculateDifference = function(string1, string2) {
    if (typeof(string1) !== "string" || typeof(string2) !== "string") {
      throw "CalculateError: String1 or String2 should be a string.";
    }

    if (string1.length !== string2.length) {
      throw "CalculateError: String1.length and String2.length should be same.";
    }

    var s1 = string1.split("");
    var s2 = string2.split("");

    var output = [];

    for (var i = 0; i < s1.length; i++) {
      var char = s1[i];
      var char2 = s2[i];

      if (char == char2) output.push(true);
      else output.push(false);
    }

    return output;
  }

  this.ratio(difference) {
    if (typeof(difference) !== Array) throw "RatioError: Difference must be an Array."

    var x = 0;
    var y = difference.length;

    for (let i = 0; i < array.length; i++) {
      const e = difference[i];
      if (!e) x++;
    }

    return x / y;
  }
};

module.exports = stringDifference;
