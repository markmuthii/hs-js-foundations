// const firstTable = {
//   materialOfTop: "Wood",
//   shape: "Rectangle",
//   numberOfLegs: 4,
//   color: "Black",
//   type: "Office",
//   height: 3,
//   heightAdjustable: true,
//   maxHeight: 5,
//   minHeight: 3,
//   adjustHeight: function (height) {
//     if (height > this.maxHeight || height < this.minHeight) {
//       return "Table cannot adjust to that height";
//     }

//     if (this.heightAdjustable) {
//       return `The table is now at ${height} feet`;
//     } else {
//       return `The table is not height adjustable`;
//     }
//   },
// };

// const secondTable = {
//   materialOfTop: "Plastic",
//   shape: "Triangle",
//   numberOfLegs: 3,
//   color: "Blue",
//   type: "Dining",
//   height: 3,
//   heightAdjustable: false,
//   adjustHeight: function (height) {
//     if (this.heightAdjustable) {
//       if (height > this.maxHeight || height < this.minHeight) {
//         return "Table cannot adjust to that height";
//       }

//       return `The table is now at ${height} feet`;
//     } else {
//       return `The table is not height adjustable`;
//     }
//   },
// };

// const thirdTable = {
//   materialOfTop: "Wood",
//   shape: "Rectangle",
//   numberOfLegs: 4,
//   color: "Black",
//   type: "Office",
//   height: 3,
//   heightAdjustable: true,
//   maxHeight: 5,
//   minHeight: 3,
//   adjustHeight: function (height) {
//     if (height > this.maxHeight || height < this.minHeight) {
//       return "Table cannot adjust to that height";
//     }

//     if (this.heightAdjustable) {
//       return `The table is now at ${height} feet`;
//     } else {
//       return `The table is not height adjustable`;
//     }
//   },
// };

// const fourthTable = {
//   materialOfTop: "Wood",
//   shape: "Rectangle",
//   numberOfLegs: 4,
//   color: "Black",
//   type: "Office",
//   height: 3,
//   heightAdjustable: true,
//   maxHeight: 5,
//   minHeight: 3,
//   adjustHeight: function (height) {
//     if (this.heightAdjustable) {
//       if (height > this.maxHeight || height < this.minHeight) {
//         return "Table cannot adjust to that height";
//       }
//       return `The table is now at ${height} feet`;
//     } else {
//       return `The table is not height adjustable`;
//     }
//   },
// };

// console.log(fourthTable.adjustHeight(4));

// console.log(firstTable.minHeight);

// console.log(firstTable.adjustHeight(6));
// console.log(secondTable.adjustHeight());

// // const fourthTable = {
// //   materialOfTop: "Wood",
// //   shape: "Rectangle",
// //   numberOfLegs: 4,
// //   color: "Black",
// //   type: "Office",
// //   height: 3,
// //   heightAdjustable: true,
// //   maxHeight: 5,
// //   minHeight: 3,
// //   adjustHeight: function (height) {
// //     if (height > this.maxHeight || height < this.minHeight) {
// //       return "Table cannot adjust to that height";
// //     }

// //     if (this.heightAdjustable) {
// //       return `The table is now at ${height} feet`;
// //     } else {
// //       return `The table is not height adjustable`;
// //     }
// //   },
// // };

// // const firstTable = {
// //   materialOfTop: "Wood",
// //   shape: "Rectangle",
// //   numberOfLegs: 4,
// //   color: "Black",
// //   type: "Office",
// //   height: 3,
// //   heightAdjustable: true,
// //   maxHeight: 5,
// //   minHeight: 3,
// //   adjustHeight: function (height) {
// //     if (height > this.maxHeight || height < this.minHeight) {
// //       return "Table cannot adjust to that height";
// //     }

// //     if (this.heightAdjustable) {
// //       return `The table is now at ${height} feet`;
// //     } else {
// //       return `The table is not height adjustable`;
// //     }
// //   },
// // };

// class Table {
//   constructor(
//     material,
//     shape,
//     color,
//     height,
//     heightAdjustable,
//     max = undefined,
//     min = undefined
//   ) {
//     this.materialOfTop = material;
//     this.shape = shape;
//     this.color = color;
//     this.height = height;
//     this.heightAdjustable = heightAdjustable;
//     this.maxHeight = max;
//     this.minHeight = min;
//   }

//   adjustHeight(height) {
//     if (this.heightAdjustable) {
//       if (height > this.maxHeight || height < this.minHeight) {
//         return "Table cannot adjust to that height!";
//       }

//       return `The table is now at ${height} feet!`;
//     } else {
//       return `The table is not height adjustable!`;
//     }
//   }
// }

// const fTable = new Table("Wood", "Rectangle", "Black", 3, true, 5, 3);

// const sTable = new Table("Plastic", "Triangle", "Blue", 2, false);
// const tTable = new Table("Plastic", "Triangle", "Blue", 2, true, 8, 1);
// const foTable = new Table("Plastic", "Triangle", "Blue", 2, false);
// const fiTable = new Table("Plastic", "Triangle", "Blue", 2, false);
// const siTable = new Table("Plastic", "Triangle", "Blue", 2, false);
// const seTable = new Table("Plastic", "Triangle", "Blue", 2, false);
// const eTable = new Table("Plastic", "Triangle", "Blue", 2, false);
// const nTable = new Table("Plastic", "Triangle", "Blue", 2, false);

// console.log(fTable.height);
// console.log(sTable.height);
// console.log(fTable.adjustHeight(2));
// console.log(sTable.adjustHeight());
// console.log(tTable.adjustHeight(9));

// const arr = [1, 3];
// const arr1 = [2, 4, 5];

// console.log(arr.length);
// console.log(arr1.length);

// const str = "same thing";
// const str2 = "same thing here";

// // Inheritance
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   move() {
//     return `${this.name} is moving`;
//   }
// }

// class Cat extends Animal {
//   meow() {
//     return `${this.name} is meowing`;
//   }
// }

// const pussNBoots = new Cat("Puss N Boots");

// console.log(pussNBoots.meow());

// console.log(pussNBoots.move());

// class Animalia {
//   move() {}
// }

// class Chordate extends Animalia {}

// class Mammal extends Chordate {
//   giveBirth() {}
// }

// class Primate extends Mammal {}

// class Hominid extends Primate {}

// class Homo extends Hominid {}

// class HomoSapien extends Homo {
//   makesFire() {}
// }

// const sapien = new HomoSapien();

// sapien.move();
// sapien.giveBirth();
// sapien.makesFire();

// // Encapsulation
// class Student {
//   #age;
//   #name;

//   constructor(name, age, course) {
//     this.#name = name;
//     this.#age = age;
//     this.course = course;
//   }

//   setAge(age) {
//     this.#age = age;
//   }

//   getAge() {
//     return this.#age;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(n) {
//     this.#name = n;
//   }
// }

// const jw = new Student("John Wick", 39, "Software");

// console.log(jw.getAge());

// console.log(jw.getName());

// // jw.#name = "Jane Wick";
// jw.setName("Jane Wick");

// console.log(jw.getName());
// console.log(jw.course);

// function doSomething() {}

// Abstraction

// class Animal {
//   move() {
//     throw new Error(
//       "This method has to be implemented in the descendant classes"
//     );
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super();
//     this.name = name;
//   }

//   move() {
//     return `${this.name} is walking`;
//   }
// }

// const pnb = new Cat("Puss N Boots");
// console.log(pnb.move());

// Polymorphism

class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    return `${this.name} is moving`;
  }
}

class Cat extends Animal {
  move() {
    return `The cat called ${this.name} is walking`;
  }
}

class Dog extends Animal {
  move() {
    return `The dog called ${this.name} is walking`;
  }
}

class Donkey extends Animal {}

const pnb = new Cat("Puss N Boots");
console.log(pnb.move());

const bosco = new Dog("Bosco");
console.log(bosco.move());

const donkey = new Donkey("Donkey");
console.log(donkey.move());
