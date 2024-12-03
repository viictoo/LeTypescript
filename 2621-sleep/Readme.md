# 2621. Sleep

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

## Approach:

To implement the sleep function, we can use the setTimeout function which waits for a given number of milliseconds and then executes a callback function. We can then wrap this logic in a Promise and use async/await to wait for the Promise to resolve.
