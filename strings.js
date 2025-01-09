let text = "Hello World!";

// Length (property)
console.log("Length:");
console.log(text.length); // 12

// String Methods

// charAt()
console.log("charAt():");
console.log(text.charAt(20));

// charCodeAt()
console.log("charCodeAt():");
console.log(text.charCodeAt(0));

// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// // iterate and print unicode values
// for (let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet.charAt(i), alphabet.charCodeAt(i));
// }

// console.log(String.fromCharCode());

// // 65 - 90 (A - Z)
// // 97 - 122 (a - z)

// let message = "Hello";

// let constant = 8;

// let encryptedMessage = "";
// let unicodeValue;
// let newCharacter;
// let newMessageUnicodeValue;
// for (let i = 0; i < message.length; i++) {
//   newMessageUnicodeValue = message.charCodeAt(i) + constant;
// }

// Encryption

// for (let i = 0; i < message.length; i++) {
//   let unicodeValue = message.charCodeAt(i);
//   let newMessageUnicodeValue = unicodeValue + constant;
//   let newCharacter = String.fromCharCode(newMessageUnicodeValue);

//   encryptedMessage += newCharacter;
// }

// console.log(encryptedMessage);

// Decryption

// message, constant,
// function cipher(process, message, constant = 8) {
//   let newMessage = "";

//   for (let i = 0; i < message.length; i++) {
//     let unicodeValue = message.charCodeAt(i);
//     let newMessageUnicodeValue;

//     if (process == "encrypt") {
//       newMessageUnicodeValue = unicodeValue + constant;
//     } else {
//       newMessageUnicodeValue = unicodeValue - constant;
//     }

//     let newCharacter = String.fromCharCode(newMessageUnicodeValue);

//     newMessage += newCharacter;
//   }

//   return newMessage;
// }

// let kelly = "Hello Warren!";

// let messageToSend = cipher("encrypt", kelly, 10);

// console.log(messageToSend);

// Warren

// let messageReceived = cipher("decrypt", messageToSend, 10);

// console.log(messageReceived);

// Exercise

// Create an app that prompts the user for what they want to do (Encrypt or Decrypt a message), the message, and the key.

// When the user enters the three things, the app should display the encrypted or decrypted message.

// Use the Caesar's Cipher for this.

// PS: THIS IS NOT A SECURE WAY TO HANDLE ENCRYPTION IN YOUR APPS, SO NEVER IMPLEMENT THIS IN A PRODUCTION APPLICATION. THIS IS SIMPLY FOR PRACTISING JAVASCRIPT.

// STEPS:

// Prompt the user for the action (encrypt/decrypt)
// let action = prompt("What do you want to do? \n1. Encrypt \n2. Decrypt");
// // // Prompt the user for the message
// let message = prompt("What is the message?");

// // // Prompt the user for the key
// let key = prompt("What is the key?");

// // Encryption and Decryption

// function cipher(action, message, key) {
//   let newMessage = "";

//   // Get each character in the message, and get its unicode value
//   for (let i = 0; i < message.length; i++) {
//     const unicodeValue = message.charCodeAt(i);
//     let newUnicodeValue;

//     if (action == 1) {
//       // If the action is encryption, add the constant to the unicode value
//       newUnicodeValue = unicodeValue + key;
//     } else {
//       // If the action is decryption, subtract the constant from the unicode value
//       newUnicodeValue = unicodeValue - key;
//     }

//     // Get the character from the new unicode value (the one that you got after either adding or subtracting the constant from the original character'S unicode value in the message)
//     const newCharacter = String.fromCharCode(newUnicodeValue);

//     // Append the character to a new message
//     newMessage += newCharacter;
//   }

//   // return the new message
//   return newMessage;
// }

// alert(cipher(action, message, parseInt(key)));

// at()
console.log("at():");
console.log(text.at(19));

// property Access
console.log(text[4]);
console.log(text[19]);

// slice()
console.log(text.slice(4, 8));
console.log(text.slice(-4, -1));
console.log(text.slice(-4));
console.log(text.slice());

// let text = "Hello World!";
// subString()
console.log(text.substring(2, 8));
console.log(text.substring(2, 0));
console.log(text.substring(2, -7));
console.log(text.substring(2));
console.log(text.substring());
console.log(text.substring(undefined, 5));

// let text = "Hello World!";
// subStr()
console.log(text.substr(2, 4));
console.log(text.substr(2));
console.log(text.substr(6, 0));
console.log(text.substr(6, -2));
console.log(text.substr());
console.log(text.substr(-4, 2));
console.log(text.substr(-4, -2));
console.log(text.substr(undefined, 5));

// let text = "Hello World!";
// concat()

// text + " and welcome"
console.log(text.concat(" and welcome", " this is another string", "!"));

// toUpperCase()
console.log(text.toUpperCase());

// toLowerCase()
console.log(text.toLowerCase());

// trim()
let text2 = "             mark@kram.codes                 ";
let text3 = "mark@kram.codes";

console.log(text2.length);
console.log(text3.length);

console.log(text2.trim() === text3);

// trimStart()
console.log(text2.trimStart());

// trimEnd()
console.log(text2.trimEnd().length);

// repeat()
console.log(text.repeat(5));

// let text = "Hello World!";

// replace()
console.log(text.replace("Hello", "Hi"));

// padStart()
console.log(text.padStart(30, "Start"));

// padEnd()
console.log(text.padEnd(30, "End"));

// let text = "Hello World!";

// indexOf()
console.log(text.indexOf("ello"));
console.log(text.indexOf("Ello"));
console.log(text.indexOf("zoro"));
console.log(text.indexOf("World", 7));
console.log(text.indexOf("ld", 7));

// let text = "Hello World!";

// includes()
console.log(text.includes("Hello"));
console.log(text.includes("hello"));
console.log(text.includes("Hello", 3));

// startsWith()
console.log(text.startsWith("Hel"));
console.log(text.startsWith("hel"));
console.log(text.startsWith("zoro"));
console.log(text.startsWith("Wor"));
console.log(text.startsWith("Wor", 6));

// let text = "Hello World!";

// endsWith()
console.log(text.endsWith("rld!"));
console.log(text.endsWith("Rld!"));
console.log(text.endsWith("zoro!"));
console.log(text.endsWith("zoro!"));
console.log(text.endsWith("llo"));
console.log(text.endsWith("Hell", 4));

// let text = "Hello World!";

// replaceAll()
console.log(text.replaceAll("l", "r"));
console.log(text.replace("l", "r"));

text = "hello world from mars";

// split()
console.log(text.split(" "));

// Using your knowledge of string and array methods, write a function that takes a string as an argument, and returns the string in Pascal Case.

// Eg:
// - `toPascalCase("hello world")` will return `"Hello World"`
// - `toPascalCase("this is a javascript Exercise")` will return `"This Is A Javascript Exercise"`

const toPascalCase = (input) => {
  // Get each of the words in the string

  const inputArray = input.split(" ");

  // ["Hello", "World"]

  const updatedArray = inputArray.map((word) => {
    // For each word:
    // get the first letter and convert it to Uppercase
    const firstLetter = word[0];
    const firstUpper = firstLetter.toUpperCase();

    // get the rest of the letters and convert them to lowercase
    const restOfLetters = word.slice(1);
    const restLower = restOfLetters.toLowerCase();

    // join them (ie the first letter and the rest of the letters)
    const newWord = firstUpper + restLower; //World

    return newWord;
  });

  // ["Hello", "World"]

  // Take all the words and have them as one sentence
  const output = updatedArray.join(" ");

  // Return the sentence
  return output;
};

console.log(toPascalCase("HELLO woRlD"));
console.log(toPascalCase("this is a javascript Exercise"));
