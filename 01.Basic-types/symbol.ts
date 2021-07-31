console.log(Symbol("tmp") === Symbol("tmp"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

// obj["sym"] -> X
console.log(obj[sym]);
