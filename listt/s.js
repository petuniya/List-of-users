const person = {
  name: "Petuniya",
  age: 16,
  isStudent: true,
  languages: ["Kz", "ru", "eng"],
  address: { city: "Taraz", street: "Pushkina" },
  "complex key": "complex value",
  ["key_" + 21 * 2]: "computed value",
  greet() {
    console.log("greet from person", this);
  },
  arrow: () => {
    console.log("Person Arrow", this);
  },
  info() {
    console.log("Preson name", this.name);
  },
};

const logger = {
  keys(withText = true) {
    if (withText) {
      console.log("Object keys:", Object.keys(this));
    } else {
      console.log(Object.keys(this));
    }
  },

  keyAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key:", key);
      console.log("Value:", this[key]);
    });
  },
};

class Human {
  static isHuman = true;

  humanGreet() {
    console.log("greet from Human");
  }
  toString() {
    console.log("to string");
  }
}

class Person extends Human {
  constructor(name, age) {
    super();
    this.name = name ?? "Undefined name";
    this.age = age ?? "undefined age";
  }

  sayHello() {
    console.log("Hello from ", this.name);
  }
}
const person1 = new Person("Petuniya", 16);
const person2 = new Person("Petya", 17);
