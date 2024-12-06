type JSONValue = number | null | string | boolean | JSONValue[] | { [key: string] : JSONValue};
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
  return (Object.keys(obj).length === 0)
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
