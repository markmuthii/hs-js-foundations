// Length (property)
// let text = "Hello World!";

// console.log(text.length); // 12

// String Methods

// charAt()
// console.log(text.charAt(2));

// charCodeAt()
// console.log(text.charCodeAt(0));

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
let action = prompt("What do you want to do? \n1. Encrypt \n2. Decrypt");
// // Prompt the user for the message
let message = prompt("What is the message?");

// // Prompt the user for the key
let key = prompt("What is the key?");

// Encryption and Decryption

function cipher(a, m, k) {
  let newMessage = "";

  // Get each character in the message, and get its unicode value
  for (let i = 0; i < m.length; i++) {
    const uv = m.charCodeAt(i);
    let nuv;

    if (a == 1) {
      // If the action is encryption, add the constant to the unicode value
      nuv = uv + k;
    } else {
      // If the action is decryption, subtract the constant from the unicode value
      nuv = uv - k;
    }

    // Get the character from the new unicode value (the one that you got after either adding or subtracting the constant from the original character'S unicode value in the message)
    const nc = String.fromCharCode(nuv);

    // Append the character to a new message
    newMessage += nc;
  }

  // return the new message
  return newMessage;
}

alert(cipher(action, message, parseInt(key)));
