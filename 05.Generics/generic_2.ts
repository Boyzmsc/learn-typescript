// Generic Array
function helloArray<T>(msg: T[]): T {
  return msg[0];
}

// T => string
helloArray(["Hello", "World"]);

// T => string | number
helloArray(["Hello", 1]);

// Generic Tuple
function helloTuple<T, K>(msg: [T, K]): T {
  return msg[0];
}

// T => [string, string]
helloTuple(["Hello", "World"]);

// T => [string, number]
helloTuple(["Hello", 5]);
