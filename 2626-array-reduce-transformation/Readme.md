* 2626. Array Reduce Transformation
Solved
Easy

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.




* Intuition

Thereduce functionis a higher-order function that takes an array, a reducer function, and an initial value, and returns a single accumulated value by applying the reducer function to each element of the array.
Approach

To implement the reduce function, we can iterate over each element of the array, apply the reducer function to the current value and the current element, and update the accumulated value. We can use a for loop, forEach method, or a for...of loop to perform the iteration.
Complexity

*  Time complexity:
    The time complexity of the reduce function implementation is O(n), where n is the length of the array, because the function iterates over each element of the array exactly once.

* Space complexity:
    O(1), as it only uses a single variable to store the accumulated value.

