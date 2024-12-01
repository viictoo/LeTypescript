type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let temp: number = init;

    for (const [index, val] of nums.entries()) {
        temp = fn(temp, val);
    }
    return temp;
};
