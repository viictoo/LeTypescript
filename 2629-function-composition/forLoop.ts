// forLoop : O(1) space complexity
type F = (x: number) => number;

function compose(functions: F[]): F {
    return (x) => {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
            console.log(x)
        }
        return x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
