type JSONValue = number | null | string | boolean | JSONValue[] | { [key: string] : JSONValue};
type Obj = Record<string, JSONValue> | JSONValue[]

// O(1) just check if we can enter the object to start a loop

function isEmpty(obj: Obj): boolean {
  for (const _ in obj) {
    return false;
  }
  return true;
}
const test_objects: Obj[] = [
  {"x": 5, "y": 42},
  {"length": 0},
  {},
  [null, false, 0],
  []
];

for ( const obj of test_objects) {
  console.log(isEmpty(obj))
}
