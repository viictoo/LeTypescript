### Flattening a Nested Array Up to N Levels

#### Problem Description

In this problem, we are tasked with flattening a **nested array** (which can have multiple levels of depth) up to a specified number of levels, `n`. Flattening an array means converting an array that may contain other arrays as elements into a simpler structure by removing the nested arrays at a particular depth. 

**Flattening up to N levels** means that we only want to collapse the nested arrays **up to a certain depth**, leaving deeper levels of nested arrays intact.

Given a multi-dimensional array and a depth `n`, we need to **flatten the array up to `n` layers**, where `n` can range from `0` (meaning no flattening) to a value that determines how deep we should flatten.

### Example 1

```javascript
const arr = [1, 2, [3, 4, [5, 6]]];
const n = 1;
console.log(flattenArray(arr, n));  // Output: [1, 2, 3, 4, [5, 6]]
```

In this example, only the immediate nested arrays (i.e., `[3, 4, [5, 6]]`) are flattened into `[3, 4, [5, 6]]`. The deeper nested array `[5, 6]` is not flattened because `n = 1`.

### Example 2

```javascript
const arr = [1, 2, [3, 4, [5, 6]]];
const n = 2;
console.log(flattenArray(arr, n));  // Output: [1, 2, 3, 4, 5, 6]
```

In this case, both the top-level array and the nested arrays up to a depth of `n = 2` are flattened, resulting in `[1, 2, 3, 4, 5, 6]`.

### Constraints

- The array can contain any number of nested arrays, and each array can contain a mix of other arrays and primitive values.
- `n` (the depth level) is a non-negative integer.
- If `n` is `0`, the array should not be flattened at all, and the function should return the array as it is.
- The maximum value of `n` will depend on the constraints of the environment, but we assume the problem can handle reasonably deep nesting.

---

#### Difficulty

**Difficulty Level**: Medium

This problem requires a deep understanding of recursion or iterative traversal, and how to efficiently manage both **time** and **space complexity** when dealing with deeply nested data structures.

- **Recursive Solution**: The key challenge lies in controlling the depth of recursion.
- **Performance Considerations**: For large arrays or deeply nested structures, it's crucial to consider both **time complexity** and **space complexity**.

---

#### Approach and Solution

To solve this problem, we can use a **recursive approach** with depth control. The function should traverse the input array and flatten it **only up to the specified depth**. At each recursive call, the function checks if the current depth is less than `n`. If it is, it continues flattening; otherwise, it stops flattening the deeper layers.

We can implement this in an iterative way as well by using a stack, but the recursive approach is more straightforward and natural for problems involving depth-limited traversal.

Solution using recursion:

```typescript
var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    const result: MultiDimensionalArray = [];
    const flattenArray = (arr: MultiDimensionalArray, n: number): void => {
        for (const elem of arr) {
            if (!Array.isArray(elem) || n === 0) {
                result.push(elem);
            } else {
                flattenArray(elem, n - 1);
            }
        }
    };

    flattenArray(arr, n);
    return result;
}
```

### How It Works:

- The `flattenArray` function recursively traverses the input array.
- If an element is not an array, or if `n === 0`, it is pushed directly to the `result` array.
- If the element is an array and `n > 0`, we recursively call `flattenArray` on the nested array, decreasing `n` by 1.
- This ensures that the array is only flattened up to `n` levels deep.

### Time and Space Complexity:

- **Time Complexity**: `O(m)` where `m` is the total number of elements across all layers of the array. Each element is visited exactly once, and the function processes each element only once.
  
- **Space Complexity**: `O(m + n)`, where:
  - `O(m)` is for the space used by the `result` array, which stores all flattened elements.
  - `O(n)` is for the recursion stack, which holds up to `n` recursive calls in the worst case.

---

#### Learning Objectives

The problem provides valuable learning opportunities on the following topics:

1. **Depth Control in Recursion**:
   - Learn how to manage recursion depth effectively, especially when dealing with nested data structures. The challenge lies in flattening the array only up to a given depth `n`, which requires careful control over when to stop the recursion.

2. **Recursive Algorithms**:
   - Understand how recursive algorithms work with nested data structures.

3. **Time and Space Complexity Considerations**:
   - Gain experience with analyzing the performance of recursive solutions. Understanding how recursion depth impacts both time and space complexity will help in optimizing solutions for larger datasets.

4. **Problem Solving with Arrays**:
   - Develop problem-solving skills in handling multi-dimensional arrays, which are common in data manipulation tasks. This problem is a stepping stone to solving more advanced challenges in dealing with hierarchical or tree-like data.

---

#### Applications

This problem is applicable in various real-world scenarios, such as processing hierarchical data, handling JSON structures, or flattening complex data inputs in web applications. It provides a solid foundation for more advanced topics in algorithms and data structure manipulation.
