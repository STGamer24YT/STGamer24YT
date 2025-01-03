# Looper.js
## What is Looper.js?
Looper.js is a Javascript module to create loops using the functions `loop()` and `infiniteLoopAsync()`

### Use Looper.js
You can easily use Looper.js by downloading the module and importing it in a Javascript file.

## Functions
Looper.js comes with 2 functions you can use in your code

### loop
`loop()` basically creates a `for` loop (yeah I know this is the best function ever made).\
The parameters for `loop()` are:
 - `start: number` *(I think I should remove this. Maybe I'll do that later...)*
    - the start of the loop
 - `end: number`
    - the end of the loop
 - `code: function`
    - the code that will be looped

#### Example:
  ```js
  import * as looper from "./looper.js";

  document.addEventListener("DOMContentLoaded", () => {
    looper.loop(1, 20, (bee) => { // this executes "console.log("Buzz!");" 20 times
        console.log("Buzz!");
        if (bee == 20) {
            console.log("Buzz! Buzz! Buzz!");
        }
    })
  }) // I totally didn't copy this from test.js
  ```
### infiniteLoopAsync
`infiniteLoopAsync()` basically creates an infinite loop, and it executes asynchronously.\
The use of `.catch()` is highly recommended.\
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
                return 0;
        }
        if ((iteration >= 10) && (iteration % 10 == 0)) {
            console.log("Buzz! Buzz! Buzz! :D");
        }
    }, 1).catch(error => {
        console.error("Program stopped because of an error.\nThe error in question: " + error);
    });
    console.log("Bees forever!");
}) // I TOTALLY DIDN'T COPY THIS CODE FROM test2.js!!!
```

