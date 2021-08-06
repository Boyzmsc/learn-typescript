class Person {
  private pName: string;

  // Property defined, but not value => undefined
  // Not assign value from the constructor
  // Use '!' keyword
  private grade!: number;

  // Read-only property
  private readonly pNumber: number = 7;

  // Static property
  public static country: string = "Korea";

  constructor(name: string) {
    this.pName = name;

    // Init read-only property in constructor possible
    this.pNumber = 99;
  }

  // Init in constructor parameter
  // constructor (public pName: string, private grade: number) {
  //    ...
  // }

  // Getter
  get getName() {
    return this.pName;
  }

  // Setter
  set setName(n: string) {
    this.pName = n;
  }
}

const cp1 = new Person("Mark");
console.log(cp1.getName);
cp1.setName = "Kim";
