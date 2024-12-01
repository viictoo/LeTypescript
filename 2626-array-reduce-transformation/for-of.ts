// use a for of loop
// Best result: cannot be reproduced

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    for (const num of nums) {
        init = fn(init, num);
    }
    return init;
};

const nums = [1,2,3,4];
const fn = function sum(accum, curr) {return accum + curr;}
const init = 0
console.log(reduce(nums, fn, init));
