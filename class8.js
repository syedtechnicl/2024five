// Arrow Functions

// 1 Syntax
// 2 arguments keyword
// 3 Hosting
// 4 this keyword

// const add = (a, b) => a + b;
// const res = add(22, 23);
// console.log(res);

// const names = (name, lname) => {
//   return name + lname;
// };
// const res = names("ss", "mm");
// console.log(res);

//new
// const unlim = (...nums) => {
//   console.log(nums);
// };
// const res = unlim(1, 2, 3, 4, 5);
// console.log(res);

// hoisting

// names();
// const names = () => {
//   console.log("arrow");
// };

// names();
// function names() {
//   console.log("old");
// }

// this keyword
// const obj = {
//   value: 20,
//   myfunction: function () {
//     console.log("value is ", this.value);
//   },
// };
// obj.myfunction();

//arrow
// const obj = {
//   value: 20,
//   myfunction: () => {
//     console.log(this);
//   },
// };
// obj.myfunction();
