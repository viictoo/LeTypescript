/**
 * Custom implementation of `map` function that takes an array of numbers
 * and a callback function to transform each element in the array.
 *
 * @param arr The array of numbers to transform.
 * @param fn The callback function that takes the current element
 * (n) and its index (i) and returns the transformed value.
 * @returns A new array where each element is the result of applying the
 * callback function.
 */
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const returnedArr: number[] = []; 
    
    for (let i: number = 0; i < arr.length; i++) {
        // Apply the transformation function fn to each element and its index
        returnedArr[i] = fn(arr[i], i);
    }
    
    // Return the newly created array with transformed values
    return returnedArr;
}
