// // // console.log("Hello world"); // string
// // // console.log("77"); // string
// // // console.log(77); // number
// // // console.log(true); // boolean
// // // console.log(false); // boolean
// // // console.log(null); // null
// // // console.log(undefined); // undefined
// // // console.log({
// // //   firstName: "John",
// // //   age: 45,
// // //   isStudent: true,
// // //   parents: [],
// // //   course: {
// // //     name: "Software",
// // //   },
// // //   getName: function () {},
// // // }); // object literal
// // // console.log(["John", 45, {}, true, null, []]); // array
// // // console.log(NaN); // Not a Number

// // // console.log(40 - "30");
// // // console.log(BigInt(2323232323232323234334343434343434343434343434343434343434)); // bigint

// // // Declaration
// // let student;

// // console.log(student); // undefined

// // // Assignment
// // student = "";
// // console.log(typeof student); // null

// // // Re-assignment
// // student = "John Wick";

// // // console.log(student); // John Wick

// // let student3 = "Jane Doe";

// // const student2 = "";

// // console.log(student);

// // const person = {
// //   firstName: "Jane",
// //   lastName: "Doe",
// // };

// // const students = [
// //   {
// //     firstName: "Jane",
// //     lastName: "Doe",
// //   },
// //   {
// //     firstName: "John",
// //     lastName: "Doe",
// //   },
// //   {
// //     firstName: "Jane",
// //     lastName: "Wick",
// //   },
// // ];

// // Control Flow

// const person = {
//   firstName: "John",
//   dob: 1980,
// };

// // Conditional Statement
// const age = 2024 - person.dob;

// let canEnter;

// // Either your age is greater than 17 AND less than 36 OR your age is greater than 59 AND less than 81

// const isOver17 = age >= 18;

// const isUnder36 = age <= 35;

// const isYouth = isOver17 && isUnder36;

// const isOver59 = age >= 60;

// const isUnder81 = age <= 80;

// const isOld = isOver59 && isUnder81;

// canEnter = isYouth || isOld;

// console.log(canEnter);

// const age = prompt("What is your age?");

// alert("Your generation is: Alpha");

// let age = null;

// Check that the age is a number greater than -1

// do {
//   let message = "Please enter your age";

//   if (age != null) {
//     message = "Please enter a valid age (0 or a positive number)";
//   }

//   age = prompt(message);
// } while (!(age >= 0) || (typeof age == "string" && age.trim() == ""));

// if (age == null) {
//   alert("Goodbye!");
//   throw new Error("Process cancelled");
// }

// const currentYear = new Date().getFullYear();

// const dob = currentYear - age;

// let generation;

// if (dob >= 1883 && dob <= 1900) {
//   generation = "Lost Generation";
// } else if (dob <= 1927) {
//   generation = "Greatest Generation";
// } else if (dob <= 1945) {
//   generation = "Silent Generation";
// } else if (dob <= 1964) {
//   generation = "Baby Boomers";
// } else if (dob <= 1980) {
//   generation = "Generation X";
// } else if (dob <= 1996) {
//   generation = "Millennials";
// } else if (dob <= 2012) {
//   generation = "Generation Z";
// } else if (dob <= currentYear) {
//   generation = "Generation Alpha";
// }

// alert(`You belong to the ${generation}`);

// let selection = null;

// let balance = 0;

// do {
//   selection = prompt(
//     "What do you want to do?\n1 - Deposit\n2 - Withdraw\n0 - Cancel"
//   );

//   console.log(selection);

//   if (selection == 1) {
//     // Deposit
//     let amount = prompt("How much do you want to deposit?");

//     balance += parseInt(amount);
//   } else if (selection == 2) {
//     // Withdraw
//     let amount = prompt("How much do you want to withdraw?");

//     balance -= parseInt(amount);
//   }

//   alert(`Your new balance is ${balance}.`);
// } while (selection == 1 || selection == 2);
