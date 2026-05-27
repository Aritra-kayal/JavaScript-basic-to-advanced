let student = {
  get1: function () {
    console.log(this);
  },
  get2: () => {
    console.log(this);
  },
  get3: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
  get4: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};
student.get1();
student.get2();
student.get3();
student.get4();
