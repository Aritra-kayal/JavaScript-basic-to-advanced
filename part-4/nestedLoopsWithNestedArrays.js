//ex-1
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder woman", "flash"],
];
for (let i = 0; i < heroes.length; i++) {
  console.log(`list #${i}`);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(j, heroes[i][j]);
  }
}
//ex-2
let students = [
  ["Raj Das", 70],
  ["Aritra Kayal", 80],
  ["Rhaul Das", 90],
];
for (let i = 0; i < students.length; i++) {
  console.log(`student #${i}`);
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
}
