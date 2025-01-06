let students = null;

// At some point, students will be reassigned to an array
students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 40,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 35,
  },
];

students != null &&
  students.forEach((student, i) => {
    console.log(student.firstName);
  });
