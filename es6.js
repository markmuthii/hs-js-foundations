// Destructuring
const students = [
  {
    firstName: "Master",
    lastName: "Chief",
    age: 45,
  },
  {
    firstName: "John",
    lastName: "McClane",
    age: 67,
  },
  {
    firstName: "Jane",
    lastName: "Wick",
    age: 26,
  },
  {
    firstName: "Mary",
    lastName: "Jane",
    age: 30,
  },
  {
    firstName: "John",
    lastName: "Wick",
    age: 34,
  },
];

// const mc = students[4];
// const jw = students[0];
// const jm = students[1];
// const mc = students[students.length - 1];

// const [jw, jm, jawi, mj, mc] = students;
// const [jw, jm] = students;
// const [, jm, , , mc] = students;

// console.log(mc);
// console.log(jw);
// console.log(jawi);
// console.log(mj);
// console.log(jm);

// REST OPERATOR
const [mc, jm, ...youth] = students;

console.log(mc);
console.log(jm);
console.log(youth);

// SPREAD OPERATOR

console.log(students);

const sum = (...numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    // result = result + numbers[i];
    // Answer these:
    // result = result + numbers[i] + numbers[++i]; // why this does not work
    // result = result + numbers[i] + numbers[i++]; // why this does not work
    result = result + numbers[i] + (numbers[++i] ?? 0); // why this works
  }
  return result;
};

console.log(sum(3, 4, 7));
console.log(sum(3, 4, 7, 7));

const arr = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [...arr, ...arr2];

console.log(arr3);
