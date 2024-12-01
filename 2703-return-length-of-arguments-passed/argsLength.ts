type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
   return args.length
}
/**
 * argumentsLength(1, 2, 3); // 3
 * argumentsLength(1, 2, 3); // 3
 * argumentsLength('a', true, { key: 'value' }, [1, 2, 3]); // 4
 * argumentsLength(); // 0
 */
let result = argumentsLength(42, true, 'Hello', [1, 2], { key: 'value' }); // 5

console.log(result)
