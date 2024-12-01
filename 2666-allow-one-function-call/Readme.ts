### 2666. Allow One Function Call
Solved
Easy
Companies

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

    The first time the returned function is called, it should return the same result as fn.
    Every subsequent time it is called, it should return undefined.


#### Problem Overview:
The task is to create a higher-order function `once` that ensures a given function (`fn`) is called at most once. On the first invocation, it executes the original function and returns its result. On subsequent calls, it returns `undefined` instead of invoking `fn` again.

---

### Approach 1: **Using Generics for Strong Typing**

#### **Code:**
```typescript
type Func<T, U> = (...args: T[]) => U;

function once<T, U>(fn: Func<T, U>): Func<T, U | undefined> {
    let flag = false;
    
    return function (...args: T[]): U | undefined {
        if (!flag) {
            flag = true;
            return fn(...args);
        } else {
            return undefined;
        }
    };
}
```

#### **Explanation**:
- **Generics (`T`, `U`)**: `T` represents the argument type(s), and `U` represents the return type of the original function. This allows `once` to be used with any function while preserving its argument and return types.
- **Type Safety**: This approach is **type-safe**. TypeScript checks that the arguments passed to the wrapped function match the expected types, and the return type is properly handled (`U | undefined`).
- **Flexibility**: It works with any function, making it flexible for different use cases.

#### **Time and Space Complexity**:
- **Time Complexity**: `O(1)` for each function call. The wrapper function checks the flag and either invokes the original function or returns `undefined` immediately. This check and return operation happens in constant time.
- **Space Complexity**: `O(1)` for the function state. The `once` function maintains only a single `flag` variable, so no additional memory is required other than storing the `flag`.

---

### Approach 2: **Using `OnceFn` Type Alias**

#### **Code:**
```typescript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: OnceFn): OnceFn {
    let flag = false;

    return function (...args: JSONValue[]): JSONValue | undefined {
        if (!flag) {
            flag = true;
            return fn(...args);
        } else {
            return undefined;
        }
    };
}
```

#### **Explanation**:
- **`OnceFn` Type**: Defines a function type that accepts `JSONValue[]` as arguments (allowing any valid JSON data type) and returns `JSONValue | undefined`. This approach is simpler but sacrifices type precision.
- **Less Type Safety**: The `OnceFn` type accepts **any valid JSON data type**, so it lacks strong typing for both arguments and return values. This makes it less safe than the generic approach because TypeScript doesn't enforce specific types for arguments or return values.

#### **Time and Space Complexity**:
- **Time Complexity**: `O(1)` for each function call. Similar to the generic approach, the wrapper function just checks a flag and either invokes the original function or returns `undefined` in constant time.
- **Space Complexity**: `O(1)` for the function state. The `flag` variable is the only state that is maintained, leading to constant space complexity.

---

### Approach 3: **Using `Function` Type (Not Recommended)**

#### **Code:**
```typescript
function once(fn: Function): (...args: any[]) => any {
    let flag = false;

    return function (...args: any[]): any {
        if (!flag) {
            flag = true;
            return fn(...args);
        } else {
            return undefined;
        }
    };
}
```

#### **Explanation**:
- **`Function` Type**: Accepts any function without specifying argument or return types, which makes it very flexible but also **unsafe**.
- **Type Safety**: This approach loses all type safety, making it the least preferred option. It allows any function to be passed, but TypeScript cannot check the arguments or return types.

#### **Time and Space Complexity**:
- **Time Complexity**: `O(1)` for each function call, as it checks the flag and either invokes the function or returns `undefined` in constant time.
- **Space Complexity**: `O(1)` for the `flag` state, just like the previous solutions. No additional space is used other than the state required to track if the function has been called.

---

### Comparison and Efficiency

| **Approach** | **Type Safety** | **Flexibility** | **Efficiency** | **Maintainability** |
|--------------|-----------------|-----------------|----------------|---------------------|
| **Generics (`T`, `U`)** | High (strict argument and return types) | Moderate (requires defining types) | Optimal (compiles down to standard JavaScript) | Best (strong typing aids long-term maintainability) |
| **`OnceFn` Type** | Moderate (JSONValue is too broad) | High (allows any JSON value) | Optimal | Moderate (looser types make code harder to manage) |
| **`Function` Type** | Low (no argument or return type checks) | High (works with any function) | Optimal | Poor (no type safety leads to hard-to-debug issues) |

#### **Efficiency**:
- **Time Complexity**: All approaches are **O(1)** for each function call. The wrapper function simply checks a flag and either invokes the original function or returns `undefined`.
- **Space Complexity**: All approaches are **O(1)**. The only extra memory used is the `flag` variable to track whether the function has been called.

#### **Best Practice**:
- **Use the generic approach** for most scenarios. It offers the best balance between flexibility, type safety, and maintainability.
- The `OnceFn` approach is simpler but less safe, ideal for cases where the input types are dynamic or unknown.
- Avoid the `Function` type for most use cases since it completely bypasses TypeScript’s type checking, potentially introducing hard-to-debug errors.

---

### Key JavaScript/TypeScript Concepts Covered:
1. **Higher-Order Functions**: The `once` function is a higher-order function that takes another function as input and returns a modified version of that function.
2. **Function Signatures**: The problem requires understanding how to properly type function signatures and deal with variadic arguments (`...args`).
3. **Generics in TypeScript**: The use of `T` and `U` generics allows for strong typing and flexible functions, ensuring that arguments and return types are preserved and enforced.
4. **Function Type Aliases**: The `OnceFn` type alias allows us to specify the structure of functions that can accept any valid JSON type as arguments, though this comes at the cost of type safety.
5. **State Management in Functions**: Using a simple `flag` variable to track whether the function has been invoked or not is a form of state management inside the wrapper function.
6. **Type Safety**: The differences in type safety between using generic types, specific function type aliases (`OnceFn`), and the `Function` type are key concepts in ensuring robust TypeScript code.

---

### Conclusion:

- **Strongly Typed Generic Approach**: Recommended for its flexibility, type safety, and long-term maintainability. It’s ideal when the types of arguments and return values are known and need to be strictly enforced.
- **`OnceFn` Approach**: Suitable for cases where the types of arguments are dynamic and less critical, but it comes at the cost of reduced type safety.
- **`Function` Type**: Best avoided due to lack of type safety and clarity, making it prone to bugs and harder to maintain.
