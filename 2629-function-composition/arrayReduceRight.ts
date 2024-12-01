// function composition using Array.prototype.reduceRight()

type F = (x: number) => number;

function compose(functions: F[]): F {
    return (x: number): number => {
        return functions.reduceRight((accumulator: number, currFn: F): number => { 
            return currFn(accumulator);
        }, x)}
};
