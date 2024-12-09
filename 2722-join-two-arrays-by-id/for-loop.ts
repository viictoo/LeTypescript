type JSONValue = null | boolean | number | string | JSONValue[] | {[key: string]: JSONValue};i
type ArrayType = {"id":number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType {
  const merger:ArrayType = {}
  

  for (let obj of arr1) {
    merger[obj.id] = obj;    
  }

  for (let obj of arr2) {
    if(merger[obj.id) {
      for (let key in obj) {
        merger[obj.id][key] = obj[key]
      }  
    } else {
      merger[obj.id] = obj
    }
  }

  return Object.values(merger)
}



const arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
]

const arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]

console.log(join(arr1, arr2))
