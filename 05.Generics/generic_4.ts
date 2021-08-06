// Generic Class
class PersonGeneric<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

// Setting type
new PersonGeneric<string, number>("Mark", 20);

// Not setting type
new PersonGeneric("Mark", 20);

// Generic with extends
// Type T must be string or number
class PersonGenericExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}
