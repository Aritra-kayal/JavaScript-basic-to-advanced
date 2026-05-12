let student = {
  name: "Aritra",
  eng: 90,
  ben: 90,
  math: 100,
  phy: 100,
  getAvg() {
    let avg = (this.eng + this.ben + this.math + this.phy) / 4;
    console.log(`${this.name}'s average number is = ${avg}`);
  },
};
student.getAvg();
