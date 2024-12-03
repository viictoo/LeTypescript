type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    let cancel = false;
    const intervalId = setInterval(() => !cancel && fn(...args), t);
    return () => {
	    cancel = true;
	    clearInterval(intervalId);
    } 
};


function sayHello(name: JSONValue): void {
  console.log(`Hello, ${name}!`);
}

// Create a cancellable function that calls sayHello every 1 second
const cancelHello = cancellable(sayHello, ["Alice"], 1000);

// After 5 seconds, cancel the repeated calls to sayHello
setTimeout(() => cancelHello(), 5000);
