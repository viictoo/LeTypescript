// time complexity: O(m) visit each element exactly once
// space complexity O(m+n) store all the elements in the result array, and the maximum depth of recursion is n

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    const result: MultiDimensionalArray = []
    const flat = (arr: MultiDimensionalArray, n: number): void => {
        for (const elem of arr) {
            if (!Array.isArray(elem) || n === 0) {
                result.push(elem)
            } else {
                flat(elem, n - 1)
            }
        }
    }
    flat(arr, n);

    return result;
}

const nestedArray1: MultiDimensionalArray = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(nestedArray1, 1)); 


const nestedArray = [1, [2, [3, [4, [5]]]]];
console.log(flat(nestedArray, 1)); // Flatten 1 layer
console.log(flat(nestedArray, 2)); // Flatten 2 layers
console.log(flat(nestedArray, 3)); // Flatten 3 layers
console.log(flat(nestedArray, 4));
