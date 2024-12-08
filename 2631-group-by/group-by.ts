interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function<T>(fn: (item: T)=> string): Record<string, T[]> {
    const myMap: Record<string, T[]> = {}
    for (const item of this) {
        const  key = fn(item)
        if (!myMap[key]) myMap[key] = []
        myMap[key].push(item);
    };
    return myMap;
}

const array = [1,2,3,4]
array.groupBy(String) // {"1":[1],"2":[2],"3":[3]}
console.log(array.groupBy(String))

const arr = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function<T>(item: {[key: string]: string}): string { 
  return item.id; 
}

console.log(arr.groupBy(fn))
