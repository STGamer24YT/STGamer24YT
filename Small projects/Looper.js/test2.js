// Description: This file is used to test the infinite loop function from range.js file.
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
})