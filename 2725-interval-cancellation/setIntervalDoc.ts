type Fn<T extends any[]> = (...args: T) => void;

function cancellable<T extends any[]>(fn: Fn<T>, args: T, t: number): () => void {
    // Execute the function immediately with the provided arguments
    fn(...args);
  
    // Set up the interval to execute fn repeatedly every `t` milliseconds
    const intervalId = setInterval(() => fn(...args), t);
  
    // Return a cancel function that clears the interval
    return () => clearInterval(intervalId);
}

// This will hold the results
const result: { time: number, returned: number }[] = [];

// The function to be executed in intervals
const fn = (x: number): number => x * 2;

// Define the arguments, time interval, and cancel time
const args: [number] = [4];  // Explicitly typing `args` as an array with a number
const t: number = 35;        // Interval in milliseconds
const cancelTimeMs: number = 190;  // After this time, the function will stop

console.log(typeof(args));  // Logs the type of `args`, should be 'object' (array)

const start = performance.now();

// This log function captures the time difference and stores the result
const log = (...argsArr: [number]): void => { // Explicitly typing `argsArr` as a tuple with a number
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(argsArr[0]) }); // We assume argsArr will always have a single number.
};

// Set up the cancellable function that logs the result at intervals
const cancel = cancellable(log, args, t);

// Cancel the repeated execution after `cancelTimeMs` milliseconds
setTimeout(cancel, cancelTimeMs);

// After `cancelTimeMs + t + 15`, log the results
setTimeout(() => {
    console.log(result); // Should log the expected result after cancellation
}, cancelTimeMs + t + 15);

