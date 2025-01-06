// const numbers = [10, 11, 12, 13, 14, 15];

// console.log("Using For Loop:");

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// console.log("Using While Loop:");
// const numbers = [10, 11, 12, 13, 14, 15];

// let i = 0;

// while (i < numbers.length) {
//   if (numbers[i] % 2 == 0) {
//     console.log(numbers[i]);
//   }

//   i++;
// }

console.log("Using Do While Loop:");
const numbers = [9, 10, 11, 12, 13, 14, 15];
let i = 0;

do {
  console.log(`The value of i is ${i}`);

  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }

  i++;
} while (i < numbers.length);

console.log(`The value of i after the loop is ${i}`);
