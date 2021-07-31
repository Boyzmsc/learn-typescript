// Create by object literal
const p1 = { name: "Kim", age: 40 };

// p1 is not "object" type
// p1 is "{name: string, age: number}" type

// Create by Object.create
const p2 = Object.create({ name: "Kim", age: 40 });

let ob: object = {};

ob = { name: "Mark" };

ob = [{ name: "Mark" }];

// ob = 39; -> Error

// ob = "Mark"; -> Error

// ob = true; -> Error

// ob = 100n; -> Error

// ob = Symbol(); -> Error

// ob = null; -> Error

// ob = undefined; -> Error