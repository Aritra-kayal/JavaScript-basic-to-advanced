const sum = function (a, b) {
  return a + b;
};
console.log(sum(1, 2));

let hello = function () {
  console.log("hello world!");
};
hello();
hello = function () {
  console.log("namaste");
};
hello();
