const student = {
  name: "aman",
  marks: 95,
  prop: this, //global scope
  getName: function () {
    console.log(this);
    return this.name; //calling object
  },
  getMarks: () => {
    console.log(this); //parent's scope
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //studen
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //window
    }, 2000);
  },
};
