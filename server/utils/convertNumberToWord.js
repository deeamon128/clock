function convertNumberToName(num) {
  var lowNames = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  var tensNames = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  var tens, ones, result;
  if (num < lowNames.length) {
    result = lowNames[num];
  } else {
    tens = Math.floor(num / 10);
    ones = num % 10;
    if (tens <= 9) {
      result = tensNames[tens - 2];
      if (ones > 0) {
        result += " " + lowNames[ones];
      }
    } else {
      result = "unknown";
    }
  }
  return result;
}

module.exports = convertNumberToName;
