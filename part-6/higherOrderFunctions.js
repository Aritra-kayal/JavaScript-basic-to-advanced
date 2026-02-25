let greet = function () {
  console.log("hello");
};

function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}
multipleGreet(greet, 2);

function multipleGreet1(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}
multipleGreet1(function () {
  console.log("namaste");
}, 10);
