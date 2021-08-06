// Keyof & Type Lookup System
interface IPerson {
  name: string;
  address: number;
}

const iPerson: IPerson = {
  name: "Kim",
  address: 6666,
};

// Keyof
// Keys => 'name' | 'address'
type Keys = keyof IPerson;

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(iPerson, "name");
getProp(iPerson, "address");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(iPerson, "name", "Mark");
setProp(iPerson, "address", 9999);
