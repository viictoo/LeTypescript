type Fn<T extends any[], R> = (...args:T) => Promise<R>

function timeLimit<T extends any[], R>(fn: Fn<T, R>, t: number): Fn<T, R | "Time Limit Exceeded"> {
    return async function (...args: T): Promise< R | "Time Limit Exceeded"> {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                clearTimeout(timeoutId);
                reject("Time Limit Exceeded")
            }, t)
            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutId)
                    resolve(result)
                })
                .catch((error) => {
                    clearTimeout(timeoutId)
                    reject(error)
                })
        })
}
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
