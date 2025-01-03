// Description: This file is used to test the range.js file.
import * as looper from "./looper.js";

document.addEventListener("DOMContentLoaded", () => {
    looper.loop(1, 20, (bee) => {
        console.log("Buzz!");
        if (bee == 20) {
            console.log("Buzz! Buzz! Buzz!");
        }
    })
})
