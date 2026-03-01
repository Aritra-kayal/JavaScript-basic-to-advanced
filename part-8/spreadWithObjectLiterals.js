let data = {
  email: "ironman@gimal.come",
  password: "abcd",
};
let dataCopy = {
  data,
  id: 123,
};
console.log(dataCopy);

//spread with object literals
let data1 = {
  email: "ironman@gimal.come",
  password: "abcd",
};
let dataCopy1 = { ...data1, id: 123, country: "India" };
console.log(dataCopy1);

let arr = [1, 2, 3, 4, 5]; //array-> value
let obj = { ...arr }; //object-> key(index):value
console.log(obj);
let obj1 = { ..."hello" }; //object-> key(index):value
console.log(obj1);
