function isCaseInsensitivePalindrom(inputString) {
  const origalLowerCase = inputString.toLowerCase();
  const reverseWord = origalLowerCase
    .split("")
    .reverse()
    .join("");

  return reverseWord === origalLowerCase;
}

console.log(isCaseInsensitivePalindrom("AaBaa"));
console.log(isCaseInsensitivePalindrom("abac"));
