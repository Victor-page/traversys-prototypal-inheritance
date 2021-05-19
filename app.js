// function Person(firstName, lastName, dob) {
//   // This additional line is automatically added by the keyword 'new'
//   // it sets up the relationship between the instance and the prototype object
//   // So that the instance will delegate to the Prototype object
//   // this = Object.create(Person.prototype);

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);

//   // return this;
// }

// Person.prototype.calculatetAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Person.prototype.getsMarried = function (newLastname) {
//   this.lastName = newLastname;
// };

// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };

// function Customer(firstName, lastName, dob, phone, membership) {
//   Person.call(this, firstName, lastName, dob);
//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// const mary = new Customer(
//   'Mary',
//   'Johnson',
//   '9-1-1981',
//   '555-555-5555',
//   'Standard'
// );
// const john = new mary.__proto__.constructor(
//   'John',
//   'Doe',
//   '9/1/1981',
//   '444-444-4444',
//   'Premium'
// );
// mary.getsMarried('Doe');

// // Customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// };

// console.log(mary.greeting());
// // console.log(mary.hasOwnProperty('calculatetAge'));
// console.log(mary);
// console.log(john);

// // String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');
// // console.log(typeof name1);
// // console.log(typeof name2);

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function (x, y) {
//   return x + y;
// };
// const getSum2 = new Function('x', 'y', 'return x + y');
// // console.log(getSum2(2, 2));

// // Object
// const john1 = { name: 'John' };
// const john2 = new Object({ name: 'John' });
// // console.log(john2);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');
// console.log(re1);
// console.log(re2);

// const personPrototypes = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastname) {
//     this.lastName = newLastname;
//   },
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 40;

// mary.getsMarried('Thompson');
// console.log(mary);

// const brad = Object.create(personPrototypes, {
//   firstName: { value: 'Brad' },
//   lastName: { value: 'Traversy' },
//   age: { value: 36 },
// });
// console.log(brad);

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastname) {
    this.lastName = newLastname;
  }

  static addNumbers(x, y) {
    return x + y;
  }

  static prop = 5;

  // We can create static ones if we are not using this keyword and it is just kind of a standalone function or method that u want in your class, then that is a good case for a static method
}

const mary = new Person('Mary', 'Williams', '11 13 80');
mary.getsMarried('Thompson');
// console.log(mary);
// console.log(Person.addNumbers(Person.prop, 2));

class Customer extends Person {
  constructor(firstName, lastName, dob, phone, membership) {
    super(firstName, lastName, dob);
    this.phone = phone;
    this.membership = membership;
  }

  static prop = 10;

  static getMemberShipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '9/1/1981', '444-444-4444', 'Premium');
// console.log(john.greeting());
// console.log(Customer.getMemberShipCost());
console.log(john);
