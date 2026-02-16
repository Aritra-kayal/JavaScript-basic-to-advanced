let months = ["january", "july", "march", "august"];
let newMonths = months.splice(0, 1, "july");
newMonths = months.splice(1, 1, "june");
console.log(months);
