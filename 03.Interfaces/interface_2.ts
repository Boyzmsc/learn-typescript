// Class implements interface
// Interface extends interface

interface IPerson {
  name: string;
  age?: number;
  hello?(): void;
}

interface IKorean extends IPerson {
  city: string;
}

class CPerson implements IPerson {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log("check");
  }
}

const cPerson1 = new CPerson("Moon");
cPerson1.hello();

const cPerson2: IKorean = {
  name: "Jeong",
  city: "Seoul",
};
