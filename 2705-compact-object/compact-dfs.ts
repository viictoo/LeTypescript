// compact object has no falsy values
// remove falsy values using recursive depth first search


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue;

function compactObject(obj: Obj): Obj {
    // Recursive function to filter out falsy values from the object or array
    const filterObj = (arr: Obj): Obj | JSONValue => {
        if (!arr) return false; // Return false for null, undefined or any falsy value
        if (typeof arr !== 'object') return arr; // Return primitive values directly

        if (Array.isArray(arr)) {
            const tempArr: Obj = [];
            for (let i = 0; i < arr.length; i++) {
                const current = filterObj(arr[i]); // Recursively filter array elements
                if (current) {
                    tempArr.push(current); // Only push non-falsy values
                }
            }
            return tempArr; // Return the filtered array
        }

        const compactObj: Obj = {}; // Initialize an empty object for compacted results
        for (const key in arr) {
            const validKey = filterObj(arr[key]); // Recursively filter each key-value pair
            if (validKey) {
                compactObj[key] = validKey; // Only include the key-value pair if valid
            }
        }
        return compactObj; // Return the compacted object
    };

    return filterObj(obj);
}

