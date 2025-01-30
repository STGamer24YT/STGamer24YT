// Description: This file is used to test the infinite loop function from range.js file.
import * as looper from "../looper.js";

document.addEventListener("DOMContentLoaded", () => {
    looper.infiniteLooperAsync((iteration) => {
        let rand = Math.floor(Math.random() * 8) + 1;
        switch (rand) {
            case 1:
                document.write("Buzz!");
                break;
            case 2:
                document.write("Buzz?");
                break;
            case 3:
                document.write("Buzz Buzz!");
                break;
            case 4:
                document.write("Buzz, Buzz!!");
                break;
            case 5:
                document.write("Buzz? Buzz!");
                break;
            case 6:
                document.write("Buzz!? BUZZ!?");
                break;
            case 7:
                document.write("Buzz...");
                break;
            default:
                document.write("Buzz... 😵");
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