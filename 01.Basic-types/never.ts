function error(msg: string): never {
  throw new Error(msg);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = "hello";

if (typeof a !== "string") {
  // a -> never
}
