function containsDuplicates(a) {
  a = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
