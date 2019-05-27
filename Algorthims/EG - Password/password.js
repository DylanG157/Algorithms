function incorrectPasscodeAttempts(passcode, attempts) {
  let failedAttempts = 0;

  for (let attempt of attempts) {
    failedAttempts = attempt === passcode ? 0 : failedAttempts++;

    if (failedAttempts === 10) {
      return true;
    }
  }

  return false;
}

console.log(
  incorrectPasscodeAttempts("1111", ["1111", "4444", "9999", "3333"])
);
