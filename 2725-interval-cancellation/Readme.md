# 2725. Interval Cancellation
 Easy


## Intuition

We are given a function fn, an array of arguments args, and an interval time t. We need to implement a function cancelFn that calls fn immediately with args and then schedules subsequent calls to fn every t milliseconds until cancelFn is called.


## Approach

Using setInterval and clearInterval.

To set an interval timer, we use the setInterval function. In the code snippet below, setInterval will repeatedly call () => fn(...args) every t milliseconds. It's important to note that setInterval does not immediately call the function before t milliseconds, which is why we manually call fn(...args) once before setting the interval.

Next, we define a function called cancelFn that clears the interval when it's called. We return cancelFn from the main function. It's worth mentioning that cancelFn is not called when our cancellable function is initially defined. However, whenever the cancellable function is called, it returns cancelFn. The cancelFn can then be called at a later time to clear the interval.


## Complexity

    Time complexity: O(1)

    Space complexity: O(1)

