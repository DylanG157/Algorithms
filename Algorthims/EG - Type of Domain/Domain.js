function domainType(domains) {
  const domainType = [];

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split(".");
    const lastDomain = domain[domain.length - 1]; // This is taking the last one ( org , com etc)

    if (lastDomain === "org") {
      domainType.push("organization");
    } else if (lastDomain === "com") {
      domainType.push("commerical ");
    } else if (lastDomain === "net") {
      domainType.push("network ");
    } else if (lastDomain === "info") {
      domainType.push("information");
    }
  }

  return domainType;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
