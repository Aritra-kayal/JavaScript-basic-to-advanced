let name = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = name;
console.log(winner, runnerup);

let name1 = ["tony", "bruce", "steve", "peter"];
let winner1 = name1[0];
let runnerup1 = name1[1];
console.log(winner1, runnerup1);

let name2 = ["tony", "bruce", "steve", "peter"];
let [winner2, runnerup2, ...other] = name2;
console.log(winner, runnerup, other);
