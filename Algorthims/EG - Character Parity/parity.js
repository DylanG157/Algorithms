// function characterParity(numInput) {
//   if (isNaN(numInput)) {
//     return "not a number";
//   } else if (numInput % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(characterParity("q"));

function isPalindrome(drome) {
  const newDrome = drome
    .split("")
    .reverse()
    .join("");

  if (newDrome === drome) {
    return "True";
  } else {
    return "false";
  }
}

isPalindrome("aabaa");
