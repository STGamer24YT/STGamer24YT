# Looper.js
![Logo](Logo.png)

A Javascript module to create loops using functions like `loop()` and `infiniteLoopAsync()`

(I think I should make its own repo in the future...)

## Functions
Looper.js comes with 2 functions you can use in your code

### loop
`loop()` basically creates a `for` loop (yeah I know this is the best function ever made).\
The parameters for `loop()` are:
 - `loops: number`
    - the amount of times the loop will iterate
 - `code: function`
    - the code that will be looped

#### Example:
```js
import * as looper from "./looper.js";

document.addEventListener("DOMContentLoaded", () => {
  looper.loop(20, (bee) => { // This executes "console.log("Buzz!")" 20 times
      console.log("Buzz!");
      if (bee == 20) {
          console.log("Buzz! Buzz! Buzz!");
      }
  })
}) // I totally didn't copy this from the loop.js example
```

### infiniteLooper
`infiniteLooper()` Basically creates an infinite loop\
The use of `.catch()` is **strongly** recommended.\
The parameters for `infiniteLoopAsync()` are:
 - `code: function`
    - The code that will be repeted infinitely
    - Can be ended by returning any value that is not `undefined`
 - (optional) `delayBetweenCalls: number`
    - The delay between each function call
    - By default the delay is `1`
    - If you input a number lower than 1, the function will throw an error
 - (optional) `extraCode: function`
    - A second functionsame time
 - (optional) `applyDelayBetweenFunctions: boolean`
    - Determines if `infiniteLooper` will wait to execute the secondary function after the first instead of executing both at the same time
    - It uses `delayBetweenCalls` as the delay between each function

#### Example:
```js
// TODO: Create the example files
// I am waaay too lazy to create them today
// :trollface:
```

### infiniteLoopAsync
`infiniteLoopAsync()` basically creates an infinite loop, and it executes asynchronously.\
The use of `.catch()` is **strongly** recommended.\
The parameters for `infiniteLoopAsync()` are:
 - `code: function`
    - The code that will be repeted infinitely
    - Can be ended by returning any value that is not `undefined`
 - (optional) `delayBetweenCalls: number`
    - The delay between each function call
    - By default the delay is `1`
    - If you input a number lower than 1, the function will throw an error

#### Example:

```js
import * as looper from "./looper.js";

document.addEventListener("DOMContentLoaded", () => {
    looper.infiniteLoopAsync((iteration) => {
        // This executes this code until rand is not a number from 1 to 7
        let rand = Math.floor(Math.random() * 8) + 1;
        switch (rand) {
            case 1:
                console.log("Buzz!");
                break;
            case 2:
                console.log("Buzz?");
                break;
            case 3:
                console.log("Buzz Buzz!");
                break;
            case 4:
                console.log("Buzz, Buzz!!");
                break;
            case 5:
                console.log("Buzz? Buzz!");
                break;
            case 6:
                console.log("Buzz!? BUZZ!?");
                break;
            case 7:
                console.log("Buzz...");
                break;
            default:
                console.log("Buzz... 😵");
                return 0; // Return a value to break the loop
        }
        if ((iteration >= 10) && (iteration % 10 == 0)) {
            console.log("Buzz! Buzz! Buzz! :D");
        }
    }, 1).catch(error => {
        console.error("Program stopped because of an error.\nThe error in question: " + error);
    });
    console.log("Bees forever!");
}) // I TOTALLY DIDN'T COPY THIS CODE FROM THE infLoopAsync.js EXAMPLE!!!
```

