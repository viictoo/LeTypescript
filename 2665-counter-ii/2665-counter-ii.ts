type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let varx = init
    const counterObj: Counter = {
        increment: () => ++varx,
        decrement:() => --varx,
        reset: () => { 
            varx = init
            return varx }
    }
    
    return counterObj
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
