// n children have got m pieces of candy. they want to wat as much candy as they can , but each child must eat exactly the same ammount of candy as any other child. determine how many pieces of candy will be eaten by all the children together. individual peiece of candy cannot be split

function candies(n, m) {
  const candy = Math.floor(m / 3);

  return candy * n;
}

console.log(candies(3, 10));
