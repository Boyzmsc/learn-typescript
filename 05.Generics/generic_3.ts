// Generic Function with type alias
type helloFuncGeneric = <T>(msg: T) => T;

const helloFunc1: helloFuncGeneric = <T>(msg: T): T => {
  return msg;
};

// Generic Function with interface
interface helloInterfaceGeneric {
  <T>(msg: T): T;
}

const helloFunc2: helloInterfaceGeneric = <T>(msg: T): T => {
  return msg;
};
