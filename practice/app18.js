let student1 = {
  name: "Aritra Kayal",
  roll: 1,
  marks: [90, 90, 90, 90, 90],
  pecentage: "90%",
  city: "Kakdwip",
};
console.log(student1);
console.log(student1.name);
console.log(student1["roll"]);
student1.gender = "Male";
console.log(student1);
student1.city = "Kolkata";
console.log(student1);
delete student1.gender;
console.log(student1);
