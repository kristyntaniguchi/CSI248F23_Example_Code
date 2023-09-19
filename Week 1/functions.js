//Traditional
function add(a, b) {
  return a + b;
}

//anonymous function syntax
const sum = function (a, b) {
  return a + b;
};

//(a, b) go to the following function
const addition = (a, b) => {
  return a + b;
};

//We can shorten it to one line.
//If you skip the curly brackets, the return is automatic
const addOneLine = (a, b) => a + b;

//If you have only one parameter, you can skip the parenthesis
const square = (a) => a * a;

//If there's no parameter, we need the parenthesis back
const print = () => console.log("Hello from print");
print();

//What if I had a function that returns a funtcion?
const createPrinter = () => console.log("Hello from create printer");
//createPrinter()(); does the same as:
//const printer = createPrinter();
//printer();
createPritner()();
