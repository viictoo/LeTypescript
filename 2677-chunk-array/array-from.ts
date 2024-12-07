// create and return shallow copy using Array.from()

// type JSONValue = string | number | JSONValue[] | { [key: string] : JSONValue} | null | boolean
type DataType = number | string;

const chunk = (arr:DataType[], size: number): DataType[][]=>{
  const Result:DataType[][]=[]; //buffer new data
  for (let index = 0; index < arr.length; index+= size) {
    Result.push(arr.slice(index, index + size)) //(a,b) a = start b = end

  }
  return Result; 

}
let arr: DataType[] = [1, 2, 3, 4, 5];
let size = 1;
let result = chunk(arr, size);
console.log(result)
