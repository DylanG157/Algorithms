function replaceArray(inputArray, elemToReplace, substitutionElem) {
  let inputArrayNew = inputArray;
  inputArrayNew.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArrayNew[index] = substitutionElem;
    } else {
      return;
    }
  });
  console.log(inputArrayNew);
}

replaceArray([2, 2, 4], 2, 5);
