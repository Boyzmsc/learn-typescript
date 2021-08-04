// Class Inheritance
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`${this._name}, ${this._age}`);
  }
}

class Child extends Parent {
  constructor(public name: string, private age: number) {
    super(name, age);
  }
}

// Abstract class
abstract class AbsPerson {
  protected _name: string = "Kim";

  abstract setName(name: string): void;
  abstract getName(): string;
}

class ExAbsPerson extends AbsPerson {
  setName(name: string): void {
    this._name = name;
  }

  getName(): string {
    return this._name;
  }
}
