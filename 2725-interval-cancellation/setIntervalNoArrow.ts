//  48ms Beats100.00%

type Fn<T extends any[]> = (...args:T) => void
interface Result {
	time: number,
	returned: number
}
function cancellable<T extends any[]>(fn: Fn<T>, args: T, t: number): () => void {
    fn(...args);
    const intervalId = setInterval(fn, t, ...args);
    return () => clearInterval(intervalId);
}


const result: Result[]= [];

const fn = (x:number):number => x * 2;
const args:[number] = [4], t:number = 35, cancelTimeMs:number = 190;

const start:number = performance.now();

const log = (...argsArr:[number]) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(argsArr[0])});
}
const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [
                        //     {"time":0,"returned":8},
                        //     {"time":35,"returned":8},
                        //     {"time":70,"returned":8},
                        //     {"time":105,"returned":8},
                        //     {"time":140,"returned":8},
                        //     {"time":175,"returned":8}
                        // ]
}, cancelTimeMs + t + 15)    
 
