function evenDigitsOnly(n) {
  const digits = n.toString().split("");

  return digits.every(digit => parseInt(digit) % 2 === 0);
}
