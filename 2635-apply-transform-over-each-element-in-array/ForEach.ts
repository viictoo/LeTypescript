// Use forEach

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	let newArray: number[] = [];
	arr.forEach((elem, i) => newArray.push(fn(elem, i)));
	return newArray
}
