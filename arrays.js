// const numbers = [5, 7, 13, 34, 95];

// console.log(numbers);

// const v = numbers.push(7);

// console.log(numbers);

// const a = numbers.pop();

// console.log(a);

// console.log(numbers);

// const b = numbers.unshift(9);

// console.log(b);

// console.log(numbers);

// numbers.shift();

// console.log(numbers);

// const n = numbers.slice(0, 3);

// console.log(numbers);

// const t = numbers.splice(2, 2, 10, 90, 348);

let numbers = new Array(5);
const evenNumbers = [];

numbers = Array.from(numbers, (el) => null);

numbers.forEach((v, i) => {
  numbers[i] = prompt("Enter number " + (i + 1));
});

numbers.forEach((v) => {
  if (v % 2 === 0) evenNumbers.push(v);
});

alert(evenNumbers);
