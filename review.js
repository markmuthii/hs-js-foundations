const functionWithCallback = (callBack) => {
  const hero = "John Wick";

  callBack(hero);
};

functionWithCallback((name) => {
  console.log(`Hello ${name} from callback`);
});

class CustomArray {
  constructor(arrValues) {
    this.values = arrValues;
  }

  forEach(callBack) {
    for (let i = 0; i < this.values.length; i++) {
      callBack(this.values[i], i, this.values);
    }
  }
}

const books = new CustomArray([
  "The Alchemist",
  "The Little Prince",
  "The Hobbit",
]);

books.forEach((book, index, arr) => {
  console.log(`Book: ${book}, Index: ${index}`);
});
