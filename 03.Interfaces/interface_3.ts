// Function interface

interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age?: number) {
  console.log(`${name}`);
};

helloPerson("Mark", 40);

// const helloPerson: HelloPerson = function (name: string, age: number) {
//   console.log(`${name}`);
// };
// Error code => 'age: number'
