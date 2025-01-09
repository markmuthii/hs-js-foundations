const firstTable = {
  materialOfTop: "Wood",
  shape: "Rectangle",
  numberOfLegs: 4,
  color: "Black",
  type: "Office",
  height: 3,
  heightAdjustable: true,
  maxHeight: 5,
  minHeight: 3,
  adjustHeight: function (height) {
    if (height > this.maxHeight || height < this.minHeight) {
      return "Table cannot adjust to that height";
    }

    if (this.heightAdjustable) {
      return `The table is now at ${height} feet`;
    } else {
      return `The table is not height adjustable`;
    }
  },
};

const secondTable = {
  materialOfTop: "Plastic",
  shape: "Triangle",
  numberOfLegs: 3,
  color: "Blue",
  type: "Dining",
  height: 3,
  heightAdjustable: false,
  adjustHeight: function (height) {
    if (this.heightAdjustable) {
      if (height > this.maxHeight || height < this.minHeight) {
        return "Table cannot adjust to that height";
      }

      return `The table is now at ${height} feet`;
    } else {
      return `The table is not height adjustable`;
    }
  },
};

const thirdTable = {
  materialOfTop: "Wood",
  shape: "Rectangle",
  numberOfLegs: 4,
  color: "Black",
  type: "Office",
  height: 3,
  heightAdjustable: true,
  maxHeight: 5,
  minHeight: 3,
  adjustHeight: function (height) {
    if (height > this.maxHeight || height < this.minHeight) {
      return "Table cannot adjust to that height";
    }

    if (this.heightAdjustable) {
      return `The table is now at ${height} feet`;
    } else {
      return `The table is not height adjustable`;
    }
  },
};

const fourthTable = {
  materialOfTop: "Wood",
  shape: "Rectangle",
  numberOfLegs: 4,
  color: "Black",
  type: "Office",
  height: 3,
  heightAdjustable: true,
  maxHeight: 5,
  minHeight: 3,
  adjustHeight: function (height) {
    if (this.heightAdjustable) {
      if (height > this.maxHeight || height < this.minHeight) {
        return "Table cannot adjust to that height";
      }
      return `The table is now at ${height} feet`;
    } else {
      return `The table is not height adjustable`;
    }
  },
};

console.log(fourthTable.adjustHeight(4));

console.log(firstTable.minHeight);

console.log(firstTable.adjustHeight(6));
console.log(secondTable.adjustHeight());

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

class Table {
  constructor(material, shape, color, height, heightAdjustable, max, min) {
    this.materialOfTop = material;
    this.shape = shape;
    this.color = color;
    this.height = height;
    this.heightAdjustable = heightAdjustable;
    this.maxHeight = max;
    this.minHeight = min;
  }

  adjustHeight(height) {
    if (this.heightAdjustable) {
      if (height > this.maxHeight || height < this.minHeight) {
        return "Table cannot adjust to that height";
      }

      return `The table is now at ${height} feet`;
    } else {
      return `The table is not height adjustable`;
    }
  }
}

const fTable = new Table("Wood", "Rectangle", "Black", 3, true, 5, 3);
const sTable = new Table("Plastic", "Triangle", "Blue", 2, false);

console.log(fTable.adjustHeight(4));
