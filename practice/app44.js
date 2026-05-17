function sum(...args) {
  return args.reduce((acc, el) => {
    return acc + el;
  });
}
console.log(sum(1, 2, 3));

function min(msg, ...args) {
  console.log(msg);
  return args.reduce((acc, el) => {
    if (acc < el) {
      return acc;
    } else {
      return el;
    }
  });
}
console.log(min("Hello", 1, 2, 3, 4, -1, -40, 100));
