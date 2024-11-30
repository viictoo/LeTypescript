/**
* Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

    toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
    notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

 */

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};
/**
 * throwError function that throws an error with the given message.
 * It has a return type of `never`, indicating it never completes normally.
 * 
 * @param message - The error message to be thrown.
 */
function throwError(message:string): never {
    throw new Error(message)
}

/**
 * expect function that returns an object with `toBe` and `notToBe` methods.
 * These methods allow users to assert equality or inequality between `val` and `testVal`.
 * 
 * @param val - The value to compare against `testVal`.
 * @returns An object with `toBe` and `notToBe` methods for comparison.
* toBe checks if the provided value `testVal` is strictly equal to `val`.
* If the values are equal, it returns `true`. Otherwise, it throws an error.
* 
* notToBe checks if the provided value `testVal` is strictly not equal to `val`.
* If the values are not equal, it returns `true`. Otherwise, it throws an error.
* 
 */
function expect(val: any): ToBeOrNotToBe {
    return {
        toBe:  (testVal: any):boolean => {
            return (val === testVal) ? true : throwError("Not Equal")
            },
        notToBe: (testVal: any):boolean => {
            return (val !== testVal) ? true : throwError("Equal")
            }
        }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
