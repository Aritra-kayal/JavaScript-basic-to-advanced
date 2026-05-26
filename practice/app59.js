let arr = ["Aritra", "Raj", "Rahul", "Ram"];
let [student1, student2, ...other] = arr;
console.log(student1, student2, other);
let obj = {
  name: "Aritra",
  city: "Kolkata",
  company: "Google",
};
let { company: placement, name: student } = obj;
console.log(placement, student);
