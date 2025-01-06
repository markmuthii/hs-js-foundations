// The app should prompt the user for what they would like to do (deposit, withdraw or cancel)
// When they select deposit or withdraw, the app should prompt for an amount
// Once they enter the amount, either the deposit or the withdraw logic should be executed based on what they answered in the first prompt
// The app should then repeat the process

// Solving the problem before writing the code.
// let amount;
// let balance = 0;
// let userInput;

// do {
//   userInput = prompt(
//     "What would you like to do? \n1. Deposit \n2. Withdraw \n0. Cancel"
//   );

//   if (userInput == 1 || userInput == 2) {
//     amount = parseInt(
//       prompt(
//         `Please enter an amount to ${userInput == 1 ? "deposit" : "withdraw"}`
//       )
//     );

//     if (amount > 0) {
//       if (userInput == 2 && amount > balance) {
//         alert(
//           `You can only withdraw an amount that is less than or equal to your current balance.`
//         );
//       } else {
//         balance = balance + (userInput == 1 ? amount : -amount);
//       }
//     } else {
//       alert("Please enter a positive integer for the amount");
//     }
//   }

//   alert(`Your balance is ${balance}`);
// } while (userInput == 1 || userInput == 2);

/*
Create an app that asks a user to enter an year. It then asks them what they want to do with that year:

1. Check whether it is a leap year.
2. Check whether it is even or odd.
3. Check which generation the year belongs to.
0. Cancel

Repeat the process until the user cancels or enters 0;

Note:
MUST USE FUNCTIONS
*/

// Prompt the user to enter year
// Prompt them on what they want to do

// 1. Check whether it is a leap year.
// Get the remainder after dividing the year by 4.
// If the remainder is 0, it is leap, otherwise it is not

// 2. Check whether it is even or odd.
// Get the remainder after dividing the year by 2.
// If the remainder is 0, it is even, otherwise it is odd

// 3. Check which generation the year belongs to.
// Check the range that the year is in

// Restart

// let action;
// let yearInput;

// const isLeapYear = (year) => {
//   return year % 4 === 0;
// };

// const isEven = (number) => {
//   return number % 2 === 0;
// };

// const getGeneration = (year) => {
//   let generation;

//   let currentYear = new Date().getFullYear();

//   if (year >= 1883 && year <= 1900) {
//     generation = "Lost Generation";
//   } else if (year <= 1927) {
//     generation = "Greatest Generation";
//   } else if (year <= 1945) {
//     generation = "Silent Generation";
//   } else if (year <= 1964) {
//     generation = "Baby Boomers Generation";
//   } else if (year <= 1980) {
//     generation = "Generation X";
//   } else if (year <= 1996) {
//     generation = "Millennials Generation";
//   } else if (year <= 2012) {
//     generation = "Generation Z";
//   } else if (year <= currentYear) {
//     generation = "Generation Alpha";
//   } else {
//     generation = "";
//   }

//   return generation;
// };

// const promptUser = (yearMessage = "Q1", actionMessage = "Q2") => {
//   yearInput = prompt(yearMessage);
//   action = prompt(actionMessage);
// };

// do {
//   promptUser(
//     "Please enter an year?",
//     "What do you want to do? \n1. Check whether it is a leap year. \n2. Check whether it is even or odd. \n3. Check which generation the year belongs to. \n0. Cancel"
//   );
//   // let message;
//   if (action == 1) {
//     // if (isLeapYear(yearInput)) {
//     //   message = yearInput + " is a leap year";
//     // } else {
//     //   message = yearInput + " is not a leap year";
//     // }

//     // alert(message);
//     alert(
//       `${yearInput} is ${
//         isLeapYear(yearInput) ? "a leap year" : "not a leap year"
//       }`
//     );
//   } else if (action == 2) {
//     alert(`${yearInput} is ${isEven(yearInput) ? "even" : "odd"}`);
//   } else if (action == 3) {
//     alert(`${yearInput} is in ${getGeneration(yearInput)}`);
//   } else {
//     alert("Thank you for using the app. \nGoodbye!");
//   }
// } while (action == 1 || action == 2 || action == 3);

/* 
Create an app that prompts the user for five numbers. The app should then display the even numbers out of the five that the user entered. If there are no even numbers, the app should display the message "None of the numbers is even".

Hint: Use Arrays.
*/

// Prompt the user for five numbers
// Prompt for one number, then prompt for the second, then the third ... fifth
// let totalNumbers = 5;
// let numbers = [];
// let evenNumbers = [];
// let positions = ["first", "second", "third", "fourth", "fifth"];

// // Check each of the numbers for whether it is even
// for (let i = 0; i < totalNumbers; i++) {
//   numbers.push(prompt(`Enter the ${positions[i]} number:`));

//   if (isEven(numbers[i])) {
//     // If it is even, add it to a list containing the even numbers
//     evenNumbers.push(numbers[i]);
//   }
// }

// // Display the numbers that were entered and the even numbers as well
// alert(
//   `The numbers that you entered are: ${numbers} \n \nThe even numbers are: ${evenNumbers}`
// );
