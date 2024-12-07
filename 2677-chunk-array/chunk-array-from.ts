// More specific types

// "Primitive" types that are commonly found in JSON
type Primitive = string | number | boolean | null;

type Chunkable = Primitive[]; 

// Function to chunk an array
function chunk(arr: Chunkable, size: number): Chunkable[] {
    const result: Chunkable[] = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

// Example usage with a valid Chunkable array
const arr: Chunkable = [1, 2, 3, 4, 5];
const size = 2;
const result = chunk(arr, size);

console.log(result);
// Output: [[1, 2], [3, 4], [5]]


