function addTwo(digit) {
  let splitDigit = digit.toString().split("");
  let total = 0;

  total = parseInt(splitDigit[0]) + parseInt(splitDigit[1]);
  return total;
}

console.log(addTwo(42));
