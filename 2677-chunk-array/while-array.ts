type Primitive = null | boolean | number | string | { [key: string]: Primitive };
type Chunkable = Primitive[];

function chunk(arr: Chunkable, size: number): Chunkable[] {
  let i:number = 0
  let result: Chunkable[] = [];
  while (i <= arr.length - 1) {
    result.push(arr.slice(i, i + size))
    if (i > arr.length - 1) {
      result.push(arr.slice(i, arr.length - 1))
    }
    i = i + size;
  }
  return result
};

let arr2: Chunkable = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 }
];
const arr: Chunkable = [1, 2, 3, 4, 5];
const size = 2;
const result = chunk(arr, size);
console.log(result)
