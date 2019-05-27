function totalSum(num1, num2) {
  return num1 + num2;
}

console.log(totalSum(20, 34));

function total(...num) {
  let total = 0;
  num.forEach(num => {
    total += num;
  });
  return total;
}

console.log(total(2, 3, 6, 3, 1, 6));
