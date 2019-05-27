function findEmailDomain(address) {
  const lastAtIndex = address.lastIndexOf("@");

  return address.slice(lastAtIndex + 1, address.length);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
