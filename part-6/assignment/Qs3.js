function longCountry(country) {
  let countryName;
  let longest = 0;
  for (let i = 0; i < country.length; i++) {
    if (longest < country[i].length) {
      longest = country[i].length;
      countryName = country[i];
    }
  }
  return countryName;
}
console.log(longCountry(["Australia", "Germany", "Uinted States of America"]));
