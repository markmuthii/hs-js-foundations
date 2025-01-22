// const obj = {
//   prop1: "This is the first property",
//   prop2: "This is the second property",
//   prop3: "This is the third property",
//   prop4: "This is the fourth property",
//   prop5: "This is the fifth property",
//   method1: function () {
//     return this.prop1 + " " + this.prop2;
//   },
// };

// const arr = [1, 2, 4, 6];
// console.log(arr[1]);

// console.log(obj.prop3);
// console.log(obj["prop3"]);
// console.log(obj["prop3"]);

// console.log(obj.prop5);
// console.log(obj["prop5"]);

const students = {
  john: 34,
  mary: 23,
  smith: 20,
  // name: function (n) {
  //   return this.n
  // }
};

// const inputName = prompt(
//   "What is the name of the student that you want to know the age of?"
// );

// alert(students.inputName); X
// alert(students[inputName]);

const nums = {
  2: "Two",
  3: "Three",
  4: "Four",
};

// console.log(nums.2+2); // will not work
console.log(nums[2 + 2]);

// APPLYING
const student = {
  fName: "John",
  lName: "Wick",
};

let input = "fName";

console.log(student.fName);
console.log(student["fName"]);
console.log(student[input]);

input = "lName";

console.log(student.lName);
console.log(student["lName"]);
console.log(student[input]);

function isLeap(year) {
  return year % 4 === 0;
}

function isEven(num) {
  return num % 2 === 0;
}

function getGeneration(year) {
  const generationYears = {
    1900: "Lost",
    1927: "Greatest",
    1945: "Silent",
    1964: "Baby Boomers",
    1980: "Gen X",
    1996: "Millenials",
    2012: "Gen Z",
    2024: "Alpha",
  };

  const keys = Object.keys(generationYears);

  let key = keys.find((k) => k >= year);

  console.log(key);

  return generationYears[key];
}

const yearInput = 1899;

// leap | even | generation
let selection = "generation";

const selectionFunctions = {
  leap: isLeap,
  even: isEven,
  generation: getGeneration,
};

console.log(selectionFunctions[selection](yearInput));
