function sum(...args) {
  //arguments
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us:", args[i]);
  }
}

function min(a, b, c, d) {
  console.log(arguments);
}

function min1() {
  console.log(arguments);
}

function max() {
  console.log(arguments.length);
}

function max1() {
  console.log(arguments);
  console.log(arguments.length);
  arguments.push(1);
}

function sum1() {
  return arguments.reduce((sum, el) => sum + el);
}

function sum2(...args) {
  return args.reduce((sum, el) => sum + el);
}

function min2(...args) {
  return args.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
}

function min3(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
}
