// using generic function types
/**
*  arguments and return types are preserved for different use cases
* Type : argument type(s)
* U : return type
* 
*/ 
type Func<Type, U> = (...args: Type[]) => U;

function once<Type, U>(fn: Func<Type, U>): Func<Type, U | undefined>  {
    let flag = false;
//  return type of OnceFn is JSONValue | undefined, which is very flexible, but also quite vague
    return function (...args:Type[]): U | undefined {
        if (!flag) {
            flag = true
            return fn(...args)
        } else {
            return undefined;
        }        
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

 // Test Cases
const add = (a: number, b: number): number => a + b;
const onceAdd = once(add);
console.log(onceAdd(1, 2)); // Output: 3
console.log(onceAdd(3, 4)); // Output: undefined

const onceConcat = once((a: string, b: string) => a + b); // (a: string, b: string) => string
console.log(onceConcat('1', '2')); // Output: '12'
console.log(onceConcat('3', '4')); // Output: undefined
