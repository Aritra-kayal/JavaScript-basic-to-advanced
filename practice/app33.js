let student = {
  name: "Aritra",
  city: "Kolkata",
  age: 20,
  par: this,
  getName: function () {
    console.log(this);
  },
  getCity: () => {
    console.log(this);
  },
  get1: function () {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },
  get2: function () {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },
};
student.getName();
student.getCity();
student.get1();
student.get2();
