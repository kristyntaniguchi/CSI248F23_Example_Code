const students = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    phoneNumber: "555-123-4567",
  },
  {
    firstName: "Alice",
    lastName: "Brown",
    email: "alice.brown@example.com",
    phoneNumber: "789-456-1230",
  },
  {
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@example.com",
    phoneNumber: "333-555-7777",
  },
];

//filter() creates a new array with elements that must meet
const filteredStudents = students.filter(
  (student) => students.firstName === "John"
);
console.log(filteredStudents);

//find() gives you the first element thar matches
const foundStudent = students.find(
  student.student.email === "david.wilson@example.com"
);

//map() makes a new array of a different data type
const studentNames = students.map((student) => students.firstName);
console.log(studentNames);

const contactInfo = students.map((student) => {
  //return this object
  return {
    lastName: student.lastName,
    phone: student.phoneNumber,
  };
});
console.log(contactInfo);
