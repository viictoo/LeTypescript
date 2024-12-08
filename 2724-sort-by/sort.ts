type Fn<T> = (value: T) => number

function sortBy<T>(arr: T[], fn: Fn<T>): T[] {
  return arr.sort((a,b) => fn(a) - fn(b))
}


const inputArr = [5, 4, 1, 2, 3]

console.log(sortBy(inputArr, (x) => x))
