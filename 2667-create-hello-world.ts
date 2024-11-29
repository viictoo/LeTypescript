/**
* https://leetcode.com/problems/create-hello-world-function
* closure:  function that has access to variables from its outer (enclosing)
* lexical scope, even after that outer function has returned.
 */

function createHelloWorld() {
    return function(...args): string {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
