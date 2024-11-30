* 2635. Apply Transform Over Each Element in Array
Solved
Easy
Companies
Hint

Given an integer array arr and a mapping function fn,
return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
* Plan:

    Initialization:
        Create an empty array returnedArr to store the transformed values.

    Looping through the array:
        Use a loop to iterate over each element of the array arr.
        For each element arr[i], we pass it to the function fn(arr[i], i) (where i is the index of the element) and store the result in returnedArr[i].
        Use index assignment to directly place the transformed value at the corresponding position in the result array.

    Return the result:
        After the loop finishes, return the returnedArr containing all the transformed values.
* Time and Space Complexity:

    Time Complexity:
        O(n), where n is the number of elements in the input array arr.
        We loop through each element once and apply the function fn to each element. Thus, the time complexity is linear in terms of the size of the array.

    Space Complexity:
        O(n), where n is the number of elements in the input array arr.
        We are creating a new array returnedArr of the same size as the input array to store the transformed elements.


