let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
//push item in array
let fruits3 = ["mango", "apple", "banana", "litchi", "orange"];
fruits3.push("pineapple");
for (let i = 0; i < fruits3.length; i++) {
  console.log(i, fruits3[i]);
}
//reverse
let fruits4 = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = fruits4.length - 1; i >= 0; i--) {
  console.log(i, fruits4[i]);
}
//odd index
let fruits1 = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 1; i < fruits1.length; i = i + 2) {
  console.log(i, fruits1[i]);
}
//even index
let fruits2 = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits2.length; i = i + 2) {
  console.log(i, fruits2[i]);
}
