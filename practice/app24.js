function oddEvenCheck(req) {
  if (req == "odd") {
    return function (n) {
      console.log(n % 2 != 0);
    };
  } else if (req == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request");
  }
}
let request = "even";
let result = oddEvenCheck(request);
console.log(result(5));
