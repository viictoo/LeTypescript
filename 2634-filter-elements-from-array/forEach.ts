type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let filtArr: number[] = []
    arr.forEach((elem, i) => {
        if (fn(arr[i], i)){
            filtArr.push(arr[i])
        }
    })
    return filtArr
};
