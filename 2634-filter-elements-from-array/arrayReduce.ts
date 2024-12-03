type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    return arr.reduce((result: number[], val: number, index: number) => {
        if (fn(val, index)) {
            result.push(val)
        }
        return result
    },[])
};
