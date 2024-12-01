type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let hashmappu = new Map()

    return function (...args) {
        const key = JSON.stringify(args)
        if (hashmappu.has(key)) return hashmappu.get(key)

        hashmappu.set(key, fn(...args)) 

        return hashmappu.get(key)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
