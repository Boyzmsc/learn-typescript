// Any
function helloAny(msg: any): any {
  return msg;
}

// Generic
function helloGeneric<T>(msg: T): T {
  return msg;
}

// Not work
// helloAny('Kim') => any
console.log(helloAny("Kim").length);

// Work
// helloGeneric('Kim') => string
console.log(helloGeneric("Kim").length);

// Generic Basic
function helloBasic1<T>(msg: T): T {
  return msg;
}

// Setting type
helloBasic1<string>("str");
helloBasic1<number>(1);

// Not setting type
helloBasic1("str");
helloBasic1(1);

// Multiple parameters
function helloBasic2<T, U>(msg: T, cnt: U): T {
  return msg;
}

// Setting type
helloBasic2<string, number>("str", 1);

// Not setting type
helloBasic2("str", 1);
