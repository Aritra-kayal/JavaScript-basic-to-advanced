// const mergeObject = (obj1, obj2) => {
//   return (newObj = { ...obj1, ...obj2 });
// };
// console.log(
//   mergeObject(
//     { name: "aritra", age: "20" },
//     { city: "kolkata", country: "India" },
//   ),
// );
function mergeObject(obj1, obj2) {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
}
const first = {
  name: "aritra",
  age: 20,
};
const second = {
  city: "kolkata",
  country: "india",
};
console.log(mergeObject(first, second));
