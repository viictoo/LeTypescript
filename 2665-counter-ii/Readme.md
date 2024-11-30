* 2665. Counter II

Write a function createCounter. It should accept an initial integer init.
It should return an object with three functions.

The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.

Key Concepts:

    Encapsulation: The counter's state is maintained privately inside the
	closure. This prevents external code from directly modifying the
	counter’s value, while still allowing interaction through the defined methods.
    
  Closures: The createCounter function defines a private variable init 
	(representing the initial value) and
	a private save variable to store the original value. These variables are not 
	directly accessible outside createCounter but are retained inside the
	closures created by the increment, decrement, and reset methods.
Complexity

    Time complexity: O(1)

    Space complexity: O(1)

