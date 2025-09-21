# Random JS concepts you learned

## Node JS

- can't accept inputs and store them under variables properly, see [readline](https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs) package

## Promises

*TLDR, its an object representing the eventual completion or failure of an asynchronous operation.*

- Basically, pretend that we have are going to store a value under a variable.
- However, the code for it will take a while, so we just set it aside to compute first while we do other stuff.

- In the meantime while we handle other processes, it can finish on its own and have one of 3 outcomes:
    - Fulfilled (the function under the promise ran properly)
        - gives the actual result of the function
    - Rejected (the function under the promise gave an error)
        - gives an error object
    - Pending (we're still waiting for it to run)
        - gives an undefined value

- However, we can't handle the state and result directly, thats for the machine to handle at runtime. Instead, we need to use the assigned methods for promises, like `.then`.

    ```js
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
    ```

> [!tip] Promises sources:
>
> - [USing Promises (MDN Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
> - [Promise documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
> - [Promises TLDR (W3CS)](https://www.w3schools.com/js/js_promise.asp)

### Use case

- for IO, you can use a promise to make sure you get an output and handle the error.
    - [see this article](https://stackoverflow.com/questions/54468349/node-js-how-to-store-readline-answer-in-a-variable).
    - Another solution is just to use `readline-sync`.

## Generator functions

- create with `function*` keyword:

    ```js
    function* fibonacciGenerator() {
      let a = 0;
      let b = 1;
      while (true) {
        yield a;
        [a, b] = [b, a + b]; // ES6 destructuring for a concise swap
      }
    }

    // --- Example Usage ---

    // Create a generator object
    const fibs = fibonacciGenerator();

    // Get the first 10 Fibonacci numbers
    console.log("The first 10 Fibonacci numbers:");
    for (let i = 0; i < 10; i++) {
      console.log(fibs.next().value);
    }

    // Or, use a for...of loop to iterate indefinitely or until a break condition
    console.log("\nThe first 5 Fibonacci numbers using a for...of loop:");
    let count = 0;
    for (const number of fibonacciGenerator()) {
      if (count >= 5) {
        break; // Stop after 5 numbers
      }
      console.log(number);
      count++;
    }
    ```
