// Interface optional property
// Read-only interface property
// Function in interface

interface Person {
  // Required property
  name: string;

  // 'age?' => 'age' can exist or not
  age?: number;

  // key : value (like map)
  // Any name possible
  [index: string]: any;

  // Function in interface
  hello?(): void;

  // Read-only property
  readonly gender?: string;
}

const person1: Person = { name: "Moon", age: 24 };
const person2: Person = { name: "Park" };
const person3: Person = { name: "Cho", anything: ["anything1", "anything2"] };

const person4: Person = {
  name: "Cho",
  anything: ["anything1", "anything2"],
  hello: function (): void {
    console.log("check");
  },
};
const person5: Person = {
  name: "Cho",
  anything: ["anything1", "anything2"],
  hello(): void {
    console.log("check");
  },
};
const person6: Person = {
  name: "Cho",
  anything: ["anything1", "anything2"],
  hello: (): void => {
    console.log("check");
  },
};

// 'this' in function parameter
const person7: Person = {
  name: "Cho",
  anything: ["anything1", "anything2"],
  hello(this: Person): void {
    console.log(`${this.name}`);
  },
};
